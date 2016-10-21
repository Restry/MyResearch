/// <reference path="../../../Assets/Scripts/common/menu.js" />
define([
    'text!./leftmenu.html'
], function (htmlStr) {

    function headerResize() {
        //获取当前头部高度
        var ht = $('#gsp-header').height();
        if (ht > 75) {
            $("#main-menu").css('display', 'none');
        }
    }



    function viewModel() {
        //获取菜单信息并绑定菜单
        var array = _MenuInfo.local();
        fmenu = ko.observable(array.menudata);

        //脱机时使用
        //var array = [{"code":"1","value":"首页","childmenu":[{"childcode":"101","childvalue":"管理员首页"},{"childcode":"102","childvalue":"客户经理首页"},{"childcode":"103","childvalue":"一般首页"}]},{"code":"2","value":"集团客户","childmenu":[{"childcode":"201","childvalue":"集团客户列表"}]},{"code":"3","value":"核心数据","childmenu":[{"childcode":"301","childvalue":"存款数据"}]}];
        //fmenu = ko.observable(array);
        menuFold = function () {
            var self = $(event.target).parents('li');
            self.siblings().removeClass('active');
            self.siblings().find('ul.collapse').removeClass('in');
            self.addClass('active');
            self.find('ul.collapse').addClass('in');
        }
        navigation = function (p_submenu) {
            window.location.href = _MenuInfo.GenerateUrl(p_submenu.childcode);
        };
        navigation1 = function (p_submenu) {
            window.location.href = _MenuInfo.GenerateUrl(p_submenu.code);
        };
        headerResize();
    }

    return {
        viewModel: viewModel,
        template: htmlStr
    }

});