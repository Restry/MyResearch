//'use strict';
var baseUrl = '../../';

requirejs.config({
    baseUrl: baseUrl,
    paths: {
        'text': '../Assets/Scripts/text'
    },
    shim: {
    },
    urlArgs: 'v=1.0.0.2' + new Date()  //开发环境防止缓存。开发环境只是用版本号控制
});

//注册公共组件
ko.components.register('page_header', { require: 'Component/frame/header' });
ko.components.register('page_menu', { require: 'Component/menu/leftmenu' });
ko.components.register('page_footer', { require: 'Component/frame/bottom' });
ko.components.register('page_enterpriseGroupCusDetail', { require: 'Component/page/enterpriseGroupCus/enterpriseGroupCusDetail' });
//ko绑定数据
define(function () {
    //支持跨域
    $.support.cors = true;
    //viewModel构造函数
    function MemberList() {
        this.userinfo = _UserInfo.local();

        var self = this;
        //对view暴露的属性
        this.pageIndex = ko.observable(1);//要访问的页码
        this.pageSize = ko.observable(2);//每页展示数据行数
        this.pageCount = ko.observable(1);//总计页数
        this.currengePage = ko.observable(1);//当前页
        this.countFrom = ko.observable(0);//展示从第几条开始
        this.countTo = ko.observable(0);//展示从第几条结束
        this.total = ko.observable(0);//一共多少条
        this.countSel = ko.observable(0);//选中了几条
        this.groupID = ko.observable(getGroupID());//当前集团ID
        //表格左下角描述信息
        this.tbDes = ko.dependentObservable(function () {
            return self.countFrom() + ' - ' + self.countTo() + ' 条（共' + self.total() + '条） 已选择' + self.countSel() + ' 条';
        });

        //对view暴露的操作
        //请求第一页数据
        this.first = function () {
            self.pageIndex(1);
            self.refresh();
        }
        //请求下一页数据
        this.next = function () {
            self.pageIndex(self.pageIndex() + 1);
            self.refresh();
        }
        //请求先前一页数据
        this.previous = function () {
            self.pageIndex(self.pageIndex() - 1);
            self.refresh();
        }
        //请求最后一页数据
        this.last = function () {
            self.pageIndex(self.pageCount());
            self.refresh();
        }
        //打开新建成员关系对话框
        this.openNewDialog = function () {
            showDialog($('#divDialog4New'));
        }
        //打开编辑成员关系对话框
        this.openEditDialog = function () {
            showDialog($('#divDialog4Edit'));
        }

        //刷新viewModel
        this.refresh = function () {
            //限制请求页码在该数据页码范围内
            if (self.pageIndex() < 1)
                self.pageIndex(1);
            if (self.pageIndex() > self.pageCount()) {
                self.pageIndex(self.pageCount());
            }
            //获取数据
            self.getMembers(self.groupID(), self.pageIndex(), self.pageSize());
        }
        
        //获取数据
        this.getMembers = function (groupID, pageIndex, pageSize) {
            $.ajax({
                type: 'get',
                url: gspsetting.api_baseurl + 'api/EnterPriseGroupMember',//TODO：域名暂时写死
                data: {
                    groupID: groupID,
                    pageIndex: pageIndex,
                    pageSize: pageSize
                },
                success: function (data) {
                    self.total(data.Total);//一共多少条
                    self.pageCount(Math.ceil((self.total() * 1.0) / (self.pageSize() * 1.0)));//共多少页
                    self.countFrom((self.pageIndex() - 1) * self.pageSize() + 1);//当前页显示1-10条
                    self.countTo(self.countFrom() + data.PagedData.length-1);
                    self.countSel(0);//选中多少条
                    self.currengePage(self.pageIndex());//当前是第几页
                    initTable(data.PagedData);
                },
                error: function () { alert("错误"); }
            });
        }
        //创建viewModel的时候顺便刷新
        this.refresh();
    }

    //创建viewModel
    var viewModel = new MemberList();
    //绑定数据
    ko.applyBindings(viewModel);


    //************************************************************************//
    //获取集团ID
    function getGroupID() {
        //先假设只有一个参数，之后再改成按照&分割
        var url = location.search; //获取url中"?"符后的字串
        var key = 'no=';
        return url.substring(url.indexOf(key) + key.length, url.length);
    }

    //数据填充表格
    function initTable(data) {
        $('#tbMembers').bootstrapTable('destroy');
        $('#tbMembers').bootstrapTable({
            showExport: true,//显示导出按钮
            exportDataType: "basic",//导出类型
            toolbar: '#btnAdd,#btnDel',
            method: 'get',
            data: data,
            dataType: "json",
            sortable: true,
            //striped: true,	 //使表格带有条纹
            //pageSize: 2,
            //pageNumber: 1,
            //pageList: [10, 20, 50, 100, 200, 500],
            idField: "ID",  //标识哪个字段为id主键
            showColumns: true, //显示隐藏列
            showRefresh: false,  //显示刷新按钮
            singleSelect: false,//复选框只能选择一条记录
            search: false,//是否显示右上角的搜索框
            clickToSelect: true,//点击行即可选中单选/复选框
            sidePagination: "client",//表格分页的位置（必填）
            silentSort: false,//在客户端还是在服务器端排序，false则客户端，当sidePagination设置为server时该设置才生效？？客户端排序无效？？
            uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
            checkboxHeader: true,//
            icons: {
                refresh: 'ion-arrow-left-c',
                toggle: 'ion-navicon-round',
                columns: 'ion-log-out'
            },
            columns: [
                { checkbox: true, title: '全选' },
                { field: 'ID', title: '客户号' },
                {
                    field: 'Name',
                    title: '客户名称',
                    sortable: true,
                    formatter: function (dataFormatter) {
                        return '<a href="' + arguments[1].MemberLink + '">' + dataFormatter + '</a>';
                    },
                    sorter: function (firstValue, secondValue) {

                    }
                },
                {
                    field: 'Relation',
                    title: '成员关联关系',
                    formatter: function (dataFormatter) {
                        return '<a href="#">' + dataFormatter + '</a>';
                    }
                },
                { field: 'InsititutionName', title: '所属机构', sortable: true },
                { field: 'BankName', title: '所属省行' },
                { field: 'AccountManagerUserName', title: '客户经理' },
                { field: 'Classify', title: '十三级分类' },
                { field: 'CreditLevel', title: '信用评级' }

            ], //列
            silent: true,  //刷新事件必须设置
            formatLoadingMessage: function () {
                return "请稍等，正在加载中...";
            },
            formatNoMatches: function () {  //没有匹配的结果
                return '无符合条件的记录';
            },
            onLoadError: function (data) {

            },
            onLoadSuccess: function (data) {

            },
            onClickRow: function (row) {

            },
            onCheck: function (row) {
                viewModel.countSel(viewModel.countSel() + 1);
            },
            onUncheck: function (row) {
                viewModel.countSel(viewModel.countSel() - 1);
            },
            onCheckAll: function (rows) {
                viewModel.countSel(rows.length);
            },
            onUncheckAll: function (rows) {
                viewModel.countSel(0);
            },
            onPageChange: function (number, size) {

            },
            onSort: function (name, order) {

            }
        });
    }

    //弹出对话框
    function showDialog($dialog) {
        $dialog.modal({
            "backdrop": "static",
            "keyboard": true,
            "show": true
        });
    }
    //关闭对话框
    function closeDialog($dialog) {
        //提供给自界面的操作接口，子界面数据提交成功后，调用window.top.window.closeDialog()，关闭对话框
    }
});



