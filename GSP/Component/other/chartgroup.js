define([
'text!./chartgroup.html'
], function (htmlStr) {

    //var  = require('text!a.html');
    function viewModel(params) {
        var model = {};
        model.param = params;
        model.action = ko.observable(1);
        model.title = ko.observable();
        model.charts = ko.observableArray();
        model.search = model.param.action.subscribe(function (newValue) {
            
            if ("search" == newValue && model.param.display())
            {
                if (model.charts().length == 0)
                {
                    model.charts(_ChartGroupTemplate[model.param.template].charts);
                }
                model.title(_ChartGroupTemplate[model.param.template].title);
                

                model.action("clear");
                model.action("search");
             }
        });

        model.dispose = function () {
            model.search.dispose();
        }
        return model;
    }


    ko.components.register('chart', { require: "Component/other/chart" });



    return {
        viewModel: viewModel,
        template: htmlStr
    }

});
