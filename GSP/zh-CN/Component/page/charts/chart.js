define([
'text!./chart.html'
], function (htmlStr) {
    //获取用户信息
    function viewModel(param) {

        var model = {};
        model.mydata = param.chartdata;
        return model;
    }
    return {
        viewModel: viewModel,
        template: htmlStr
    }

});