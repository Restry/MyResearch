module.exports = (function($) {
    if ($.user) return $.user;
    var user = {};

    $.ajax({
       // url: "http://192.168.5.1/api/userinfo",
        url: "http://192.168.5.1:3000/users/1",
        cache: "false",
        type: "GET",
        async: false,
        success: function(res) {
            user = res;
        },
        error: function(res) {
            alert(JSON.stringify(res));
        }
    })
    $.user = user;
    return user;
})($)