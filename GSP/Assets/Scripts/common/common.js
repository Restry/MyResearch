/// <reference path="globalsetting.js" />
'use strict';

var _Log = {};

_Log.error = function (p_err) {
    console.log(p_err);
}

//------------------------

var _CommunicationHelper = function () {

};

_CommunicationHelper.get = function (p_url, p_async, p_success, p_error)
{
    $.support.cors = true;
    var t_returnvalue = { state: "error", data: {}};
    $.ajax({
        url: p_url,
        cache: false,
        type: "GET",
        async: p_async == null ? false : p_async,//false,
        beforeSend: function (xhr) {
            xhr.withCredentials = true;
        },
        xhrFields: {
            withCredentials: true
        },
        success: function (res) {
            if (p_success)
                p_success(res);
            else {
            t_returnvalue.state = "success";
            t_returnvalue.data = res;
            }
        },
        error: function (res) {
            _Log.error(res);
            if (p_error)
                p_error(res)
            else {
                t_returnvalue.state = "error";
                t_returnvalue.data = res;
            } 
        }
    });
    return t_returnvalue;
}


_CommunicationHelper.post = function (p_url, p_params, p_async, p_success, p_error) {
    $.support.cors = true;
    var t_returnvalue = { state: "error", data: {} };
    $.ajax({
        url: p_url,
        cache: false,
        type: "POST",
        data: p_params,
        dataType: 'json',
        async: p_async == null ? false : p_async,//false,
        beforeSend: function (xhr) {
            xhr.withCredentials = true;
        },
        xhrFields: {
            withCredentials: true
        },
        success: function (res) {
            if (p_success)
                p_success(res);
            else {
                t_returnvalue.state = "success";
                t_returnvalue.data = res;
            }
        },
        error: function (res) {
            _Log.error(res);
            if (p_error)
                p_error(res)
            else {
                t_returnvalue.state = "error";
                t_returnvalue.data = res;
            }
        }
    });
    return t_returnvalue;
}



function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
function _CreateGuid() {
    var guid = guid = "_" + (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4()).toLowerCase();
    return guid;
}

(function () {
    $(window).resize(function () {
        var height_header = $('#gsp-header').height();
        if (height_header > 75) {
            $("#gsp-header-work ul").css({ 'float': 'left' });
            $("#main-menu").css('display', 'none');
            $("#main-menu-content-sm #mainnav-menu a").css({ 'padding': '12px 12px' });
            $("#gsp-boxed").css({ 'padding-top': '240px', 'padding-left': '0px' });
            $("#gsp-boxed-sm").css({ 'padding-top': '240px', 'padding-left': '0px' });

            $("#work-dy").addClass('work-dy-sm')
            $("#work-db").addClass('work-db-sm')
            $("#work-yj").addClass('work-yj-sm')
            $("#work-gg").addClass('work-gg-sm')
        }
        else {
            $("#gsp-header-work ul").css({ 'float': 'right' });

            $("#main-menu").css('display', 'block');
            //$("#main-menu-sm").css('padding-top', '90px');
            //$("#mainnav-menu-sm a").css({ 'padding': '12px 20px' });

            $("#gsp-boxed").css({ 'padding-top': '90px', 'padding-left': '220px' });
            $("#gsp-boxed-sm").css({ 'padding-top': '90px', 'padding-left': '0px' });

            $("#work-dy").removeClass('work-dy-sm')
            $("#work-db").removeClass('work-db-sm')
            $("#work-yj").removeClass('work-yj-sm')
            $("#work-gg").removeClass('work-gg-sm')
        }
    })
}())


