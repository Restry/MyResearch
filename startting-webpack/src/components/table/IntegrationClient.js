 var model = {};

 model.errorHandler = function(res) {

     alert("系统出现异常，请检查输入信息是否有误！");

     if (console)
         console.log(JSON.stringify(res));
 }

 model.submitCheck = function(obj) {
     var busProValided = $("input[name=BusinessProduct]:checked").val();

     $("[data-valmsg-for='BusinessProduct']").removeClass("field-validation-error").hide();
     if (!busProValided) {
         $("[data-valmsg-for='BusinessProduct']").addClass("field-validation-error").text("必输字段").show();
         return false;
     }
     if (window.posted) {
         $(".doubble-web-front-check").show()
         return false;
     }

     if (busProValided && window._uploadValid && $("form").valid()) {
         window.posted = true;
         return true;
     }


     return false;
 }


 model.enablePagging = function(ctrl, callback) {

     ctrl = ctrl ? ctrl : viewModel;

     ctrl.showPagging = ko.observable(false);
     ctrl.currentPage = ko.observable();
     ctrl.previousPages = ko.observableArray();
     ctrl.nextPage = ko.observable();
     ctrl.currentPageNumber = ko.observable();
     ctrl.totalPageNumber = ko.observable();
     ctrl.isNonePagging = function() {
         return ctrl.currentPageNumber() == ctrl.totalPageNumber();
     }

     ctrl.previousButtonClicked = function() {
         if (ctrl.currentPageNumber() == 1) return;
         var previousPageLink = ctrl.previousPages.pop();
         $.get(previousPageLink).done(function(data) {
             ctrl.nextPage(ctrl.currentPage());
             ctrl.currentPage(previousPageLink);
             ctrl.currentPageNumber(ctrl.currentPageNumber() - 1);
             if (callback)
                 callback(data.value);
             else {
                 ctrl.items(data.value);
                 model.SetTableStyle();
             }
         });
     }
     ctrl.nextButtonClicked = function() {
         if (ctrl.isNonePagging()) return;
         var nextPageLink = ctrl.nextPage();

         $.get(nextPageLink).done(function(data) {
             ctrl.previousPages.push(ctrl.currentPage());
             ctrl.currentPage(nextPageLink);
             ctrl.nextPage(data["@odata.nextLink"]);
             ctrl.currentPageNumber(ctrl.currentPageNumber() + 1);

             if (callback)
                 callback(data.value);
             else {
                 ctrl.items(data.value);
                 model.SetTableStyle();
             }
         }).fail(function(e) {
             // alert(JSON.stringify(e));
         });

     }
 }

 model.ListViewModel=function() {

     this.items = ko.observableArray();

     this.queryTitle = ko.observable();
     this.queryStatus = ko.observable();
     this.queryDateStart = ko.observable();
     this.queryDateEnd = ko.observable();

     this.separate = model.separate;
     this.fixDate = function(str) {
         if (str)
             return str.split('T')[0];

         return str;
     }

     this.setDocumentData = function(data) {
         this.items([]);
         if (data.value.length > 0) {
             $(".ui-table tbody tr#emptymsg").remove();
             this.currentPage(data.queryUrl);
             this.currentPageNumber(1);
             this.totalPageNumber(data["@odata.count"] == undefined ? null :
                 Math.ceil(data["@odata.count"] / data.value.length));
             this.previousPages.removeAll();
             this.nextPage(data["@odata.nextLink"]);
             this.showPagging(true);
             this.items(data.value);

             model.SetTableStyle();
         } else {
             model.Comment("没有符合查询条件的相关记录！");
         }
     }
 }

 model.separate = function(str, cutoff, html) {
     if (!str) return "";

     if ($.isArray(str)) {
         var tmp = '';
         $.each(str, function(i, s) {
             tmp += "<i>" + s.split('|')[0] + "</i>";
         })
         return tmp;
     } else {
         var tmp = str.split('|')[0];
         var dsptmp = tmp;
         if (tmp.length > cutoff) {
             dsptmp = tmp.substring(0, cutoff) + "...";
         }
         if (html)
             dsptmp = "<span title='" + tmp + "'>" + dsptmp + "</span>";
         return dsptmp;
     }
 }

 model.Comment = function(str) {
     var length = $(".ui-table thead tr:eq(0)").find("th").length;
     $(".ui-table tbody").html("<tr id='emptymsg'><td colspan='" + length + "'><b>" +
         str + "</b></td></tr>");
 }

 model.SetTableStyle = function() {

     $(".ui-table tbody tr:even").css("background-color", "#F0F0FF");
 }

 model.getFileSize = function(filePath) {
     var image = new Image();
     image["dynsrc"] = filePath;
     return image.fileSize;
 }

 model.getIEVersion = function() {
     var Sys = {};
     var ua = navigator.userAgent.toLowerCase();
     if (window.ActiveXObject)
         Sys.ie = ua.match(/msie ([\d.]+)/)[1]

     //以下进行测试
     if (Sys.ie)
         return Sys.ie;

     return 0;

 }

 model._uploadValid = true;

 model.fileSizeCheck = function(f) {
     try {
         var browserVersion = getIEVersion();
         var fileSize;
         if (f == null)
             f = document.getElementById('Avatar');
         if (browserVersion > 6) {
             fileSize = f.files[0].size;
         } else {
             fileSize = getFileSize(f.value);
         }
         var afterCalc = fileSize / 1024;
         if (afterCalc > window.uploadMaxSize || after == 0) {
             //alert('文件大小超过了30kb.不允许上传！');
             $(f).next().show();
             _uploadValid = false;
         } else {
             $(f).next().hide();
             _uploadValid = true;
         }
     } catch (e) {
         //errorHandler(e);
         _uploadValid = true;
     }

 }

 model.deleteAttachment = function() {
     $("#existbox").hide();
     $("#uploadBox").show();
     $("#attachFileName #FileName").val('');
 }

 model.TimeMark = function(query) {
     if (query.indexOf('?') != -1)
         return query + "&_sopsmark=" + (new Date()).valueOf();
     else
         return query + "?_sopsmark=" + (new Date()).valueOf();
 }

 module.exports = model;