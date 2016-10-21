'use strict';
var baseUrl = '../../';

requirejs.config({
    baseUrl: baseUrl,
    paths: {
        'text': '../Assets/Scripts/text'
    },
    shim: {
    },
    urlArgs: 'v=1.0.0.4' + new Date()  //开发环境防止缓存。开发环境只是用版本号控制
});

//注册公共组件
ko.components.register('page_header', { require: 'Component/frame/header' });
ko.components.register('page_menu', { require: 'Component/menu/leftmenu' });
ko.components.register('page_footer', { require: 'Component/frame/bottom' });
//ko.components.register('charts', { require: 'Component/chart/charttemplate' });
ko.components.register('select', { require: 'Component/select/multiple' });
//ko绑定数据
define(function () {

    function viewMdoel() {

        var _self = this;
        _self.userinfo = _UserInfo.local();
        _self.first='首页';
        _self.sec = '管理员';
        _self.selVlaue = {
            id: '-1',
            data: [
                { code: '001', name: '全辖' },
                { code: '002', name: '北京' },
                { code: '003', name: '上海' },
                { code: '004', name: '广州' },
                { code: '005', name: '深圳' },
                { code: '006', name: '江苏' },
                { code: '007', name: '安徽' },
                { code: '008', name: '山西' },
                { code: '009', name: '山东' },
                { code: '010', name: '陕西' },
                { code: '011', name: '湖南' }
            ]
        }
        _self.selVlaue1 = {
            id: '-1',
            data: [
                { code: '101', name: '全辖' },
                { code: '102', name: '北京' },
                { code: '103', name: '上海' },
                { code: '104', name: '广州' },
                { code: '105', name: '深圳' },
                { code: '106', name: '江苏' },
                { code: '107', name: '安徽' },
                { code: '108', name: '山西' },
                { code: '109', name: '山东' },
                { code: '110', name: '陕西' },
                { code: '111', name: '湖南' }
            ]
        }
         
        _self.btntest = function () {

            var ids = _self.selVlaue.id;
            var ids1= _self.selVlaue1.id;
            alert(ids + ',第二个：' + ids1);
            //alert(ids1);
        }
       
    }



    ko.applyBindings(new viewMdoel());
})








