define([
'text!./contentpage2.html'
], function (htmlStr) {
     
    function viewModel(param) {

        var model = {}; 
        var model = {
            searchoption: ko.mapping.fromJS({ action: null, refdata: null }),
            displaycharts: ko.mapping.fromJS({ action: null, refdata: null })
        }
        model.action = ko.observable();
        model.displaychart1 = ko.observable(false);
        model.displaychart2 = ko.observable(false);
        model.displaychart3 = ko.observable(false);
        //event action - search button click
        model.search = model.searchoption.action.subscribe(function (newValue) {

            if (newValue == "search") {
                if (model.searchoption.refdata.charttype.indexOf('All') >= 0 || model.searchoption.refdata.charttype.indexOf('SD') >= 0) {
                    if ("001" == model.searchoption.refdata.selectedorg.code) {
                        model.displaychart1(true);
                        model.displaychart2(false);
                    } else {
                        model.displaychart1(false);
                        model.displaychart2(true);
                    }
                } else {
                    model.displaychart1(false);
                    model.displaychart2(false);
                }

                if (model.searchoption.refdata.charttype.indexOf('All') >= 0 || model.searchoption.refdata.charttype.indexOf('RJ') >= 0) {
                    model.displaychart3(true);
                } else {
                    model.displaychart3(false);
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

    ko.components.register('searchoption2', { require: 'Component/other/searchoption2' });
    ko.components.register('chartgroup2', { require: 'Component/other/chartgroup' });
    return {
        viewModel: viewModel,
        template: htmlStr
    }

});
