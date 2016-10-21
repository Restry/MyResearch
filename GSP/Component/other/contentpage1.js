define([
'text!./contentpage1.html'
], function (htmlStr) {
     
    function viewModel(param) {
        var model = {}; 
        var model = {
            searchoption: ko.mapping.fromJS({ action: null, refdata: null }),
            displaycharts: ko.mapping.fromJS({ action: null, refdata: null })
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
        model.search = model.searchoption.action.subscribe(function (newValue) {

            if (newValue == "search") {
                if (model.searchoption.refdata.charttype.indexOf('All') >= 0 || model.searchoption.refdata.charttype.indexOf('SD') >= 0) {
                    model.displaychart1(true);
                    //if ("001" == model.searchoption.refdata.selectedorg.code) {
                    //    model.displaychart1(true);
                    //    model.displaychart2(false);
                    //} else {
                    //    model.displaychart1(false);
                    //    model.displaychart2(true);
                    //}
                } else {
                    model.displaychart1(false);
                    model.displaychart2(false);
                }

                if (model.searchoption.refdata.charttype.indexOf('All') >= 0 || model.searchoption.refdata.charttype.indexOf('RJ') >= 0) {
                    //model.displaychart3(true);
                    if ("Other" == model.searchoption.refdata.currency) {
                        model.displaychart3(false);
                        model.displaychart4(true);                        
                    } else {
                        model.displaychart3(true);
                        model.displaychart4(false);
                    }
                } else {
                    model.displaychart3(false);
                    model.displaychart4(false);
                }

                if (model.searchoption.refdata.charttype.indexOf('All') >= 0 || model.searchoption.refdata.charttype.indexOf('TY') >= 0) {
                    //model.displaychart3(true);
                    if ("Other" == model.searchoption.refdata.currency) {
                        model.displaychart5(false);
                    } else {
                        model.displaychart5(true);
                    }
                } else {
                    model.displaychart5(false);
                }

                if (model.searchoption.refdata.charttype.indexOf('All') >= 0 || model.searchoption.refdata.charttype.indexOf('FXL') >= 0) {
                    //model.displaychart3(true);
                    if ("Other" == model.searchoption.refdata.currency) {
                        model.displaychart7(false);
                    } else {
                        model.displaychart7(true);
                    }
                } else {
                    model.displaychart7(false);
                }

                if (model.searchoption.refdata.charttype.indexOf('All') >= 0 || model.searchoption.refdata.charttype.indexOf('FHY') >= 0) {
                    model.displaychart8(true);
                } else {
                    model.displaychart8(false);
                }

                if (model.searchoption.refdata.charttype.indexOf('All') >= 0 || model.searchoption.refdata.charttype.indexOf('FCP') >= 0) {
                    //model.displaychart3(true);
                    if ("Other" == model.searchoption.refdata.currency) {
                        model.displaychart9(false);
                    } else {
                        model.displaychart9(true);
                    }
                } else {
                    model.displaychart9(false);
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
    ko.components.register('searchoption1', { require: 'Component/other/searchoption1' });
    //if (!ko.components.isRegistered('chartgroup'))
    ko.components.register('chartgroup', { require: 'Component/other/chartgroup' });


    return {
        viewModel: viewModel,
        template: htmlStr
    }

});
