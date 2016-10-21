define([
'text!./header.html'
], function (htmlStr) {

    function headerResize() {
        //获取当前头部高度
        var ht = $('#gsp-header').height();
        if (ht > 75) {
            $("#gsp-header-work ul").css({ 'float': 'left' });
            $("#gsp-boxed").css({ 'padding-top': '240px', 'padding-left': '0px' });
            $("#gsp-boxed-sm").css({ 'padding-top': '240px', 'padding-left': '0px' });

            $("#work-dy").addClass('work-dy-sm')
            $("#work-db").addClass('work-db-sm')
            $("#work-yj").addClass('work-yj-sm')
            $("#work-gg").addClass('work-gg-sm')
        }
    }


    //获取用户信息
    function viewModel(param) {
        var model = {};
        model.userinfo = _UserInfo.local();
        model.checkqueue = function () {
            //console.log(model);


            //window.setTimeout(function () { model.checkqueue() }, 5000);
        };
        model.dispose = function () {
            //model.checkqueue.dispose();
        }
        window.setTimeout(function () { model.checkqueue() }, 5000);

        headerResize();

        return model;
    }
    return {
        viewModel: viewModel,
        template: htmlStr
    }

});
