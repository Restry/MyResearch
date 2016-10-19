/// <reference path="menu.js" />
/// <reference path="common.js" />
/// <reference path="globalsetting.js" />
/// <reference path="../js.storage.js" />
/// <reference path="../js.cookie.js" />

var _UserInfo = {};

_UserInfo.updateonline = function () {
    var user = _CommunicationHelper.get(gspsetting.api_baseurl + "api/UserInfo");

    Storages.localStorage.set("userinfo", user.data);
}

_UserInfo.setcurrentrole = function (p_currentrole) {
    Storages.localStorage.set("usercurrentrole", p_currentrole);
}

_UserInfo.local = function () {
    var user = null;
    if (Storages.localStorage.get("userinfo")) {
        user = Storages.localStorage.get("userinfo");
    }
    if (user && Storages.localStorage.get("usercurrentrole")) {
        user.currentrole = Storages.localStorage.get("usercurrentrole");
    }
    return user;
};



_UserInfo.setusercookie = function (p_cookie) {
    Storages.cookieStorage.setPath("/");
    Storages.cookieStorage.set("usercookie", p_cookie);
};


_UserInfo.getusercookie = function () {
    Storages.cookieStorage.setPath("/");
    if (!Storages.cookieStorage.get("usercookie"))
        return null;
    else
        return Storages.cookieStorage.get("usercookie");
};


var rolelist = [
    { menucode: '101', title: "管理员首页", roles: ['-999', '-998', '001'] },
    { menucode: '102', title: "首页", roles: [] },
    { menucode: '103', title: "首页", roles: [] }
]

//'101': { url: '../../Pages/home/manager.html', title: "管理员首页" },
//    '102': { url: '#.html', title: "客户经理首页" },
//    '103': { url: '../../Pages/home/sam.html', title: "一般首页" },

function homeindex(rolecode) {
    var url = '';
    for (i = 0;i<=rolelist.length;i++)
    {
        if (rolelist[i].roles.indexOf(rolecode)>=0)
        {
            url = rolelist[i].url;
            break;
        }
    }
    return url;
}


function homemenucode(rolecode) {
    var t_menucode = '';
    for (i = 0; i <= rolelist.length; i++) {
        if (rolelist[i].roles.indexOf(rolecode) >= 0) {
            t_menucode = rolelist[i].menucode;
            break;
        }
    }
    return t_menucode;
}











//_UserInfo.__defineSetter__('usercookie', function (y) {

//    Storages.cookieStorage.setPath("/");
//    Storages.cookieStorage.set("usercookie", y);
//});

//_UserInfo.__defineGetter__('usercookie', function () {
//    Storages.cookieStorage.setPath("/");
//    if (!Storages.cookieStorage.get("usercookie"))
//        return null;
//    else
//        return Storages.cookieStorage.get("usercookie");
//});


(function () {
    //check if not logon,redirect 
    var scripts = document.getElementsByTagName('script');
    var checklogon = null;
    for (var i = scripts.length - 1; i >= 0 ; i--) {
        checklogon = scripts[i].getAttribute('checklogon');
        if (checklogon)
            break;
    }
    if (checklogon != null && checklogon.toLowerCase() === "true") {
        if (!_UserInfo.getusercookie())
            window.location.href = _MenuInfo.GenerateUrl("98");
    }


    //window.onerror = function (errorMessage, scriptURI, lineNumber) {
    //    var s = JSON.stringify(arguments);
    //    alert(s);
    //}
}())





