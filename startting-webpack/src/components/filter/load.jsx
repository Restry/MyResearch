/*
    输入参数：列表集合
    输入参数：搜索事件
 */


import html from './tpl.html';
import "./externals/knockout.datepicker.js"

module.exports = {
    viewModel: function(params) {
        var model={};
        
        model.queryTitle=ko.observable();
        model.queryDateStart=ko.observable();
        model.queryDateEnd=ko.observable();
        model.queryStatusData=ko.observableArray(['1','2','3']);
        model.queryStatus=ko.observable();
        model.search=params.click|| function(){

            alert("Search:"+model.queryTitle());
        }


        return model;
    },
    template: html
}