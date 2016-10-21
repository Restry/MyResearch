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



ko.components.register('contentpage1', { require: 'Component/other/contentpage1' });
ko.components.register('contentpage2', { require: 'Component/other/contentpage2' });

ko.components.register('deposit_indatacontrast', { require: 'Component/other/deposit_indatacontrast' });


//ko绑定数据
define(function () {
    function viewMdoel() {
        var model = {};
        return model;
    }

    ko.applyBindings(new viewMdoel());
})








