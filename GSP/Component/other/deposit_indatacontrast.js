define([
'text!./deposit_indatacontrast.html'
], function (htmlStr) {

    function viewModel(param) {
        var model = {};
        var model = {
            indatasearchaction: ko.mapping.fromJS({ action: null, refdata: null })
            //displaycharts: ko.mapping.fromJS({ action: null, refdata: null })
        }
        model.action = ko.observable();
        //时点
        model.displaychart1 = ko.observable(false);
        model.displaychart2 = ko.observable(false);
        //日均
        model.displaychart3 = ko.observable(false);
        model.displaychart4 = ko.observable(false);
        //同业
        model.displaychart5 = ko.observable(false);
        //付息率
        model.displaychart7 = ko.observable(false);
        //分行业
        model.displaychart8 = ko.observable(false);
        //分产品
        model.displaychart9 = ko.observable(false);

        //event action - search button click
        model.search = model.indatasearchaction.action.subscribe(function (newValue) {

            if (newValue == "search") {
               
                if ("RMB" == model.indatasearchaction.refdata.selectedcurrency.code) {
                    alert(11);
                }


                model.action("clear");
                model.action("search");
            }




        });

        model.dispose = function () {
            model.search.dispose();
        }

        //plot.resize();
        return model;
    }
    //if (!ko.components.isRegistered('searchoption'))
    ko.components.register('deposit_indatacontrastsearch', { require: 'Component/other/deposit_indatacontrastsearch' });
    //if (!ko.components.isRegistered('chartgroup'))
    //ko.components.register('chartgroup', { require: 'Component/other/chartgroup' });


    return {
        viewModel: viewModel,
        template: htmlStr
    }

});
