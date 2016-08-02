require("../css/global.css");
require("../css/knowledge.css");
require("../components/ieCompatible/init")


require.ensure(["knockout"], function() {

    ko.components.register('top-nav', require("../components/top-nav/main"));
    ko.components.register('filter', require("../components/filter/load"));
    ko.components.register('table', require("../components/table/load"));
    ko.components.register('edit', require("../components/edit/load"));



    //Temporarily redirect ko.applyBindings to scope it to this live example
    var realKoApplyBindings = ko.applyBindings;
    ko.applyBindings = function() {
        if (arguments.length === 1)
            return ko.applyBindings(arguments[0], document.getElementById('app'));
        return realKoApplyBindings.apply(ko, arguments);
    }

    /*<![CDATA[*/
                        require("./lib/knockout.validation.min.js");
                        require("./lib/jquery.form.min.js");

    function ViewModel() {
        var model = {
            page: {
                title: ko.observable("Question"),
                action: ko.observable("list"),
                edit:function (params) {

                    
                }
            }
        };
 

        model.params = {
            query: ko.observable(),
            

            itemTypes: ["1", "2"]
        }


        return model;

    }

    ko.applyBindings(new ViewModel());
    /*]]>*/

    ko.applyBindings = realKoApplyBindings;

});


/*
    var loadQuestions = function (query) {
        var url = "/odata/@Html.Raw(ViewBag.ItemType)s?$count=true&$orderby=Created desc"
        var select = "&$select=ItemID,QuestionNum,Title,BusinessProductsString,RelationSystem,QuestionType,QuestionStatus,Created"
        var queryUrl = url + select + query

        $("table.ui-table").after("<h3 class='loading'>正在加载数据...</h3>");


        $.ajax({
            url: TimeMark(queryUrl),
            headers: { Accept: 'application/json; odata=verbose' }
        }).done(function (data) {
            data.queryUrl = queryUrl;
            viewModel.setDocumentData(data);
            $("h3.loading").remove();
        }).error(errorHandler);
    }

    $(function () {

        loadQuestions(""); 
    })

    var viewModel = new ListViewModel();

    viewModel.queryStatusData = ["全部", "已退回" @Html.Raw(ViewBag.AdditionSearchParmetter)]
    var ss_i = 0;
    viewModel.css = function () {
        ss_i++;
        return ss_i % 2 > 0 ? "odd" : "";
    }

    viewModel.search = function () {

        if (!searchAvailability(viewModel)) return;

        var query = '';
        if (viewModel.queryTitle())
            query += " contains(Title,'" + encodeURIComponent(viewModel.queryTitle()) + "') and ";
        if (viewModel.queryStatus() && viewModel.queryStatus() != "全部")
            query += " contains(QuestionStatus, '" + encodeURIComponent(viewModel.queryStatus()) + "') and ";
        if (viewModel.queryDateStart())
            query += " Created ge " + viewModel.queryDateStart() + "T00:00:01Z and ";
        if (viewModel.queryDateEnd())
            query += " Created le " + viewModel.queryDateEnd() + "T23:59:59Z and ";
        if (query) {
            query = query.substring(0, query.length - 4);
            query = "&$filter=" + query;
        }
        loadQuestions(query);
    }

    enablePagging(viewModel);

    ko.applyBindings(viewModel); */