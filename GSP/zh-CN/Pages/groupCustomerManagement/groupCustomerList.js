'use strict';
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

//ko绑定数据
define(function () {
    //支持跨域
    $.support.cors = true;
    function CustomerList() {
        this.userinfo = _UserInfo.local();

        var self = this;
        //要访问的页码
        this.pageIndex = ko.observable(1);
        //每页展示数据行数
        this.pageSize = ko.observable(2);
        //总计页数
        this.pageCount = ko.observable();
        //当前页
        this.currengePage = ko.observable();

        this.countFrom = ko.observable(0);
        this.countTo = ko.observable(0);
        this.total = ko.observable(0);
        this.countSel = ko.observable(0);

        this.refresh = function () {
            //限制请求页码在该数据页码范围内
            if (self.pageIndex() < 1)
                self.pageIndex(1);
            if (self.pageIndex() > self.pageCount()) {
                self.pageIndex(self.pageCount());
            }
            //获取数据
            self.getMembers( self.pageIndex(), self.pageSize());
        }
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
        //获取数据
        this.getMembers = function (pageIndex, pageSize) {
            $.support.cors = true;
            $.ajax({
                type: 'get',
                url: gspsetting.api_baseurl + 'api/GroupCustomerManagement',
                data: {
                    pageIndex: pageIndex,
                    pageSize: pageSize
                },
                success: function (data) {
                    self.pageCount(Math.ceil((data.Total * 1.0) / (self.pageSize() * 1.0)));//共多少页
                    self.countFrom((self.pageIndex() - 1) * self.pageSize() + 1);//当前页显示1-10条
                    self.countTo(self.countFrom() + data.PagedData.length - 1);
                    self.total(data.Total);//一共多少条

                    initTable(data.PagedData);
                },
                error: function (e) {
                    _Exception.throw(e);
                }
            });
        }
        this.refresh();
    }
    //创建viewModel
    var viewModel = new CustomerList();
    viewModel.tbDes = ko.dependentObservable(function () {
        return viewModel.countFrom() + ' - ' + viewModel.countTo() + ' 条（共' + viewModel.total() + '条） 已选择' + viewModel.countSel() + ' 条';
    });
    //绑定数据
    ko.applyBindings(viewModel);
    function initTable(data) {
        $('#datableApp').bootstrapTable('destroy');
        $('#datableApp').bootstrapTable({
            //showExport: true,//显示导出按钮
            //exportDataType: "basic",//导出类型
            //toolbar: '#btnAdd,#btnDel',
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
            
            checkboxHeader: true,
            columns: [
            { checkbox: true, title: '全选' },
            { field: 'ID', title: '集团编号' },
            {
                field: 'Name',
                title: '集团客户名称',
                sortable: true,
                formatter: function (dataFormatter) {
                    return '<a href="' + arguments[1].MemberLink + '">' + dataFormatter + '</a>';
                },
                sorter: function (firstValue, secondValue) {

                }
            },
            { field: 'DepositBalance', title: '存款余额' },
            { field: 'CompanyLoanBalance', title: '公司贷款余额', sortable: true },
            { field: 'LoanBalance', title: '贷款余额' },
            { field: 'CreditBalance', title: '授信余额' },
            { field: 'AvailableCreditTotal', title: '可用授信总量' },
            { field: 'CustomerLevel', title: '客户层级' },
            { field: 'LeadBankInstitution', title: '牵头行机构' },
            { field: 'LeadBankManager', title: '牵头行客户经理' },
            ],
            silent: true,
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




    //<!--新建集团的js-->
    //<script>

    //弹出表单
        $("#btn_OpenFrom").click(function () {
            modal2();
            $("#submit").click(function () {
                var str = $("#open-form").serializeObject();   //调用表单序列化方法
                alert(JSON.stringify(str))
            })
        });
    //显示窗体
    function modal2() {
        $("#myNewModal").modal({
            "backdrop": "static",
            "keyboard": true,
            "show": true
        });
    }
    //</script>

    //<!--操作分层达标的js-->
    //<script>
    //
    //将表单转成json格式
        $("#btnDaok").click(function () {
            var str = {};
            str = $("#formID").serializeObject();   //调用表单序列化方法
            alert(typeof str);
            alert(JSON.stringify(str));
            alert(typeof JSON.stringify(str))
        });
    //显示窗体
    function modal() {
        $("#myDaModal").modal({
            "backdrop": "static",
            "keyboard": true,
            "show": true
        });

    }
    //弹出表单
    $("#btn-Open-Da").click(function () {
        var arr = [];
        var companyArrs = [];
        var a = 0;
        var strset = $("#datableApp tbody tr input[type=checkbox]");
        $(strset).each(function () {
            if ($(this).is(":checked")) {
                a++;
                strid = $(this).closest(".rowid").prop("id");//获取选中行的id
                arr.push(strid);
                var str = $(this).val() + " " + $(this).attr("number");
                companyArrs.push(str);
            }
        });
        if (a <= 0) {
            alert("至少选择一条数据创建分层打标!");
        } else {
            modal();
            //循环数据创建元素添加到div
            //先情况之前的数据
            $('#show-data span').remove();
            $('#show-data br').remove();
            $.each(companyArrs, function () {
                var doc = this;
                var tem = "<span>" + doc + "</span><br /><br />";
                $(tem).appendTo(".insert-data");
            })
            //保存按钮
            $("#submit-da").click(function () {
                //把集团编号和选择的type传递到后台修改
                var strset = $("input[type=radio]");
                var value = $('input[name="type"]:checked').val()
                alert(value);
                alert(arr);
            });
            //关闭按钮，关闭后刷新下把数据清掉
            $("#close-da").bind("click", function () {
                window.location.reload();
            });

        }
    });
    //</script>
    //<!--删除操作-->
    //<script>
    //全选
        $(".thead-box").click(function () {
            var _checked = $(this).is(":checked");
            $(".table input[type='checkbox']").prop("checked", _checked)
        });


    //删除
    $("#datableApp").on("click", ".delete", function () {
        var rowId = $(this).closest("tr").find("td").children(".rowid").prop("id");//获取当前行的id
        $.ajax({
            url: "" + rowId,
            type: "GET",
            success: function (strData) {
                alert("删除成功！");
            }, error: function (strData) {
                alert(error);
            }
        })
        $(this).closest("tr").remove();
        // window.location.reload();
    });

    //批量删除
    var arr = [];
    var a = 0;
    $("body").on("click", "#table_remove", function () {
        var strset = $("#datableApp tbody tr input[type=checkbox]");
        $(strset).each(function () {
            if ($(this).is(":checked")) {
                a++;
                strid = $(this).closest(".rowid").prop("id");//获取选中行的id
                arr.push(strid);
            }
        });
        if (a <= 0) {
            alert("至少选择一条数据删除!");
        } else {
            alert(arr);
            //向数据库删除
            $.ajax({
                url: "" + arr,
                type: "GET",
                success: function (strData) {
                    alert("操作成功");
                }, error: function (sttData) {                        alert(error);
                }
            })
        }
    });


    //</script>
    //<!--操作指定总行团队-->
    //<script>
    //弹出表单
        $("#btn_account_team").click(function () {
            modal3();

        });
    function modal3() {
        $("#DaModal2").modal({
            "backdrop": "static",
            "keyboard": true,
            "show": true
        });
    }

    //</script>
    //<!--弹出导出-->
    //<script>
    //弹出表单
        $("#export-excel").click(function () {
            modal4();

        });
    function modal4() {
        $("#exportDaModal").modal({
            "backdrop": "static",
            "keyboard": true,
            "show": true
        });
    }


    //</script>
});








