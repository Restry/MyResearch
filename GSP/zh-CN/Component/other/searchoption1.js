define([
'text!./searchoption1.html'
], function (htmlStr) {

    //var  = require('text!a.html');
    function viewModel(params) {
        var model = {};
        model.param = params;
  
        var ajax_options = [{ code: "001", txt: "全辖" }, { code: "002", txt: "北京" }]

        //给日期赋值并实现联动
        var year1 = [];
        var month1 = [];
        var month2 = [];
        var month3 = [];

        model.selectedyear = ko.observable();
        model.selectedmonth = ko.observable();

        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var m = month;

        for (var j = 0; j < m; j++) {
            month1.push({ value: j, text: month + "月" });
            month--;
        }
        for (var i = 0, j = 12; j > 0; i++, j--) {
            month2.push({ value: i, text: j + "月" });
        }
        var month3_length = 24 - month1.length - month2.length;
        for (var i = 0, j = 12; i < month3_length; i++, j--) {
            month3.push({ value: i, text: j + "月" });
        }

        model.monthlist = ko.observableArray(month1);

        if (month3_length == 0) {
            for (var j = 0; j < 2; j++) {
                year1.push({ value: j, text: year + "年" });
                year--;
            }
            model.yearlist = ko.observableArray(year1);
            model.changemonth = function (data, event) {
                var selectyear = model.selectedyear().value;
                if (selectyear == 0) {
                    model.monthlist(month1)
                } else if (selectyear == 1) {
                    model.monthlist(month2)
                }
            }
        } else {
            for (var j = 0; j < 3; j++) {
                year1.push({ value: j, text: year + "年" });
                year--;
            }
            model.yearlist = ko.observableArray(year1);
            model.changemonth = function (data, event) {
                var selectyear = model.selectedyear().value;
                if (selectyear == 0) {
                    model.monthlist(month1)
                } else if (selectyear == 1) {
                    model.monthlist(month2)
                } else if (selectyear == 2) {
                    model.monthlist(month3)
                }
            }
        }
         
        model.currency = ko.observable("RMB");
        model.charttype = ko.observableArray(["SD"]);
        model.orglist = ko.observableArray(ajax_options);
        model.selectedorg = ko.observable();
        
        model.selectall = ko.observable(false);

        model.selectall.subscribe(function (cvalue) {
            if (cvalue) {
                model.charttype(["SD", "RJ","TY","FXL","FHY","FCP"]);
            }
            else {
                model.charttype([]);
            }
        })


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
