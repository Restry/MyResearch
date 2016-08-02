var html = require("./tpl.html");

var common =require("./IntegrationClient")

function viewModel(params) {

    var model = new common.ListViewModel();

    var loadQuestions = function(query) {
        var url = "/odata/" + params.itemType + "s?$count=true&$orderby=Created desc"
        var select = "&$select=ItemID,QuestionNum,Title,BusinessProductsString,RelationSystem,QuestionType,QuestionStatus,Created"
        var queryUrl = url + select + query

        $("table.ui-table").after("<h3 class='loading'>正在加载数据...</h3>");

        $.ajax({
            url: common.TimeMark(queryUrl),
            headers: {
                Accept: 'application/json; odata=verbose'
            }
        }).done(function(data) {
            data.queryUrl = queryUrl;
            model.setDocumentData(data);
            $("h3.loading").remove();
        }).error(common.errorHandler);
    }

    var ss_i = 0;
    model.css = function() {
        ss_i++;
        return ss_i % 2 > 0 ? "odd" : "";
    }
 
    // $(function() { 
    //     loadQuestions(""); 
    // })

    common.enablePagging(model);

    params.query.subscribe(function(value) {
        loadQuestions(value);
    });
    return model;
}

module.exports = {
    viewModel: viewModel,
    template: html
};