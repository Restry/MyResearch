define([
'text!./charttemplate.html'
], function (htmlStr) {

    function viewModel(params) {
        var model = {};
        model.chartsdata = ko.observable(charts);
        var array = charts;

        return model;
    } 
    ko.components.register('chartinfo', { require: "Component/chart/chartinfo" });
    ko.components.register('chart', { require: "Component/chart/chart" });

    return {
        viewModel: viewModel,
        template: htmlStr
    }
})