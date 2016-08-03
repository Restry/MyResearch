/*
    输入参数：列表集合
    输入参数：搜索事件
 */

var html = require('./tpl.html');
require("./externals/knockout.datepicker.js");

module.exports = {
    viewModel: function(params) {
        var model = {};


        model.isStartEndDate = function(startDate, endDate) {
            if (startDate && startDate.length > 0 && endDate && endDate.length > 0) {
                var startDateTemp = startDate.split(" ");
                var endDateTemp = endDate.split(" ");
                var arrStartDate = startDateTemp[0].split("-");
                var arrEndDate = endDateTemp[0].split("-");

                var allStartDate = new Date(arrStartDate[0], arrStartDate[1], arrStartDate[2]);
                var allEndDate = new Date(arrEndDate[0], arrEndDate[1], arrEndDate[2]);
                if (allStartDate.getTime() > allEndDate.getTime()) {
                    return false;
                }
            }
            return true;
        }

        model.searchAvailability = function() {

            if (model.queryTitle() && model.queryTitle().length > 70) {
                alert("标题输入不能超过70个字符");
                return false;
            }
            if (!model.isStartEndDate(model.queryDateStart(), model.queryDateEnd())) {
                alert("开始时间不能大于结束时间");
                return false;
            }
            return true;
        }

        model.queryTitle = ko.observable();
        model.queryDateStart = ko.observable();
        model.queryDateEnd = ko.observable();
        model.queryStatusData = params.filterTypes;
        model.queryStatus = ko.observable();
        model.search = params.click || function() {

            alert("Search:" + model.queryTitle());


            if (!model.searchAvailability(model)) return;

            var query = '';
            if (model.queryTitle())
                query += " contains(Title,'" + encodeURIComponent(model.queryTitle()) + "') and ";
            if (model.queryStatus() && model.queryStatus() != "全部")
                query += " contains(QuestionStatus, '" + encodeURIComponent(model.queryStatus()) + "') and ";
            if (model.queryDateStart())
                query += " Created ge " + model.queryDateStart() + "T00:00:01Z and ";
            if (model.queryDateEnd())
                query += " Created le " + model.queryDateEnd() + "T23:59:59Z and ";
            if (query) {
                query = query.substring(0, query.length - 4);
                query = "&$filter=" + query;
            }
            params.query(query);

        }

        return model;
    },
    template: html
}