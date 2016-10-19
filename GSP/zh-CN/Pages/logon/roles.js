/// <reference path="D:\Work\TFS02\BOCGSP2Project\BOC.GSP2\BOC.GSP2.WebApp\Assets/Scripts/common/userinfo.js" />

'use strict';
$(document).ready(function () {

    function UserModel() {
        var model = {};
        model.userinfo = _UserInfo.local();
        //选择角色
        model.fSelect = function (_role) {
            _UserInfo.setcurrentrole(_role);
            var _cookuser = {
                userid: model.userinfo.userid,
                teamcode:_role.teamcode,
                rolecode:_role.rolecode
            }
            _UserInfo.setusercookie( _cookuser);
             
            //根据角色code获取菜单
            _MenuInfo.rolemenu(_role.rolecode);
            window.location.href = _MenuInfo.GenerateUrl(homemenucode(_role.rolecode));
        }

        return model;
    }
    ko.applyBindings(new UserModel());
})










