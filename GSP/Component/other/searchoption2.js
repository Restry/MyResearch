define([
'text!./searchoption2.html'
], function (htmlStr) {

    //var  = require('text!a.html');
    function viewModel(params) {
        var model = {};
        model.param = params;
  
        var ajax_options = [{ code: "001", txt: "全辖" }, { code: "002", txt: "北京" }]
         
        model.currency = ko.observable("RMB");
        model.charttype = ko.observableArray(["FHY"]);
        model.orglist = ko.observableArray(ajax_options);
        model.selectedorg = ko.observable();
        model.yearlist = ko.observableArray(["2016", "2017"]);
        model.selectedyear = ko.observable();
        model.monthlist = ko.observableArray(["01", "02"]);
        model.selectedmonth = ko.observable();

        model.searchaction = function () {
             
            model.param.refdata.currency = model.currency();
            model.param.refdata.charttype = model.charttype();
            model.param.refdata.selectedorg = model.selectedorg();
            model.param.refdata.selectedyear = model.selectedyear();
            model.param.refdata.selectedmonth = model.selectedmonth();
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
