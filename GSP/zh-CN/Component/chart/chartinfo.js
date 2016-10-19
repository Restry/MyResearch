define([
'text!./chartinfo.html'
], function (htmlStr) {

    function viewModel(params) {
        var model = {};
        model.title = ko.observable(params.chartinfo.title);
        model.description = ko.observable(params.chartinfo.description);
        model.datadate = ko.observable(params.chartinfo.datadate);
        model.unit = ko.observable(params.chartinfo.unit);
        return model;
    }

    return {
        viewModel: viewModel,
        template: htmlStr
    }
})