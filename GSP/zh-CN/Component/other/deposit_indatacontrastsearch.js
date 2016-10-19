define([
'text!./deposit_indatacontrastsearch.html'
], function (htmlStr) {

    //var  = require('text!a.html');
    function viewModel(params) {
        var model = {};
        model.param = params;

        var ajax_options = [{ code: "RMB", txt: "人民币" }, { code: "US", txt: "外币折美元" }, { code: "Other", txt: "各币种折人民币" }]

        model.currencylist = ko.observableArray(ajax_options);
        model.indicator = ko.observable("SDYE");
        model.selectedcurrency = ko.observable();
        model.indatayearlist = ko.observableArray(["2016", "2017"]);
        model.indataselectedyear = ko.observable();
        model.indatamonthlist = ko.observableArray(["01", "02"]);
        model.indataselectedmonth = ko.observable();

        model.indatasearchaction = function () {

            model.param.refdata.selectedcurrency = model.selectedcurrency();
            model.param.refdata.indicator = model.indicator();            
            model.param.refdata.indataselectedyear = model.indataselectedyear();
            model.param.refdata.indataselectedmonth = model.indataselectedmonth();
            model.param.action("clear");
            model.param.action("search");
        }
        return model;
    }




    return {
        viewModel: viewModel,
        template: htmlStr
    }

});
