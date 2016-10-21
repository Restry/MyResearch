/// <reference path="D:\Work\TFS02\BOCGSP2Project\BOC.GSP2\BOC.GSP2.WebApp\Assets/Scripts/knockout-3.4.0.js" />
'use strict';
var baseUrl = '/';

requirejs.config({
    baseUrl: baseUrl,
    paths: {
        'text': 'Assets/Scripts/text',
        'knockout': 'Assets/Scripts/knockout-3.4.0.debug'
    },
    shim: { 
    }
});


//function TTTTTTT() {
//    var madle = {
//        chooes=ko.observableArray()
//};
//    return madle;
//}
  
//ko.components.register('page_header', {  require: 'zh-CN/Component/frame/bottom' });
//ko.applyBindings(new TTTTTTT());
 
//var htmlStrw = require(["text!Component/frame/header.html"], function (str) { return str; });
//console.log(htmlStrw());