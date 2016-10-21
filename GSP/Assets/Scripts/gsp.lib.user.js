(function (inner) {

    inner.user = inner.user || {};

    inner.user.setusercookie= function (p_cookie) {
        Storages.cookieStorage.setPath("/");
        Storages.cookieStorage.set("usercookie", p_cookie);
    }

    inner.user.getusercookie= function () {
        Storages.cookieStorage.setPath("/");
        if (!Storages.cookieStorage.get("usercookie"))
            return null;
        else
            return Storages.cookieStorage.get("usercookie");
    }

    return inner;

})(gsp || {})