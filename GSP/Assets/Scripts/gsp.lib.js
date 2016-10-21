window.gsp = (function (inner) {
    inner = inner || {};
    inner = {
        utils: {
            pageAfterFunction: [],

            //handlerURL: (_spPageContextInfo.webServerRelativeUrl.endsWith('/') ? _spPageContextInfo.webServerRelativeUrl : (_spPageContextInfo.webServerRelativeUrl + "/")) + '_layouts/15/api',
            handlerURL: "http://localhost:9000/",

            ajax: function (url, data, type, isasync) {
                isasync = typeof isasync == "undefined" ? true : isasync;
                type = type || "GET";
                var split = url.indexOf('?') != -1 ? "&" : "?";

                return $.ajax({
                    url: this.handlerURL + url + split + "_gspmark=" + (new Date()).valueOf(),
                    type: type,
                    data: data,
                    async: isasync,
                    headers: { Accept: 'application/json; odata=verbose' }
                });
            },

            load: function () {
                gsp.ui.loading.show();

                setTimeout(function () {
                    gsp.ui.loading.add(0.2);
                }, 200);

                setTimeout(function () {
                    gsp.ui.loading.add(0.2);
                }, 400);
                setTimeout(function () {
                    gsp.ui.loading.add(0.2);
                }, 400);

                setTimeout(function () {
                    gsp.ui.loading.hide();
                }, 1000);

                //$(".ui-datepicker-input").datepicker($.datepicker.regional["zh-CN"]);

                //this.viewModel = new this.AppViewModel();
                //ko.applyBindings(this.viewModel);

                //if (!gsp.utils.viewModel.withOutBranchs)
                //    gsp.utils.gspajax({
                //        Action: "Branch",
                //        Method: "GetBranchesByUser"
                //    }, function (res) {
                //        if (gsp.utils.viewModel.Branchs)
                //            gsp.utils.viewModel.Branchs(res.data);
                //    }, "GET");

                //$(".gsploading").appendTo(".gsp:first");
                //var options = {
                //    url: this.form.url,
                //    type: "POST",
                //    async: false,
                //    statusCode: {
                //        408: function (e) {

                //        }
                //    },
                //    beforeSend: function () {
                //        gsp.utils.viewModel.submitEnable(false);
                //        gsp.ui.notice('正在提交更新中，请稍后...');
                //        //$(".gsploading").fadeIn();
                //        //gsp.utils.viewModel.Process('正在提交更新中，请稍后...');
                //        this.url = gsp.utils.form.url;
                //    },
                //    uploadProgress: function (event, position, total, percentComplete) {

                //        //if (percentComplete < 100)
                //        //    gsp.ui.notice(percentComplete + '%');
                //        //gsp.utils.viewModel.Process(percentComplete + '%');
                //    },
                //    success: function (res) {
                //        res = $.parseJSON(res);

                //        gsp.utils.viewModel.submitEnable(true);
                //        if (res.success)
                //            gsp.ui.notice("操作成功！");
                //        //gsp.utils.viewModel.Process(res.msg || "操作成功！");

                //        gsp.utils.form.success(res);
                //    },
                //    complete: function (res) {
                //        //gsp.ui.notice(res.msg); 

                //        // $(".gsploading").fadeOut();
                //    },
                //    error: function (e) {

                //    }
                //};
                //$("form").ajaxForm(options);

                //if ($(this.tableIdentity).length == 0) return;
                //this.table = $(this.tableIdentity).DataTable(this.config);

            },
            timeMark: function (query) {
                if (query.indexOf('?') != -1)
                    return query + "&_gspmark=" + (new Date()).valueOf();
                else
                    return query + "?_gspmark=" + (new Date()).valueOf();
            },
            log: function (str) {
              

            },

            _CreateGuid: function () {

                function S4() {
                    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                }

                var guid = guid = "_" + (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4()).toLowerCase();
                return guid;
            }

        },
   
        user: {

            updateonline: function () {

                inner.utils.ajax("api/UserInfo").then(function (res) {
                    Storages.localStorage.set("userinfo", res.data);
                })
            },

            setcurrentrole: function (p_currentrole) {
                Storages.localStorage.set("usercurrentrole", p_currentrole);
            },

            local: function () {
                var user = null;
                if (Storages.localStorage.get("userinfo")) {
                    user = Storages.localStorage.get("userinfo");
                }
                if (user && Storages.localStorage.get("usercurrentrole")) {
                    user.currentrole = Storages.localStorage.get("usercurrentrole");
                }
                return user;
            }

        },
        menu: {
            get: function () {

            }
        },
        ui: {


            loading: {
                value:0,
                show: function () {
                    this.value = 0;
                    NProgress.start();
                },
                hide: function () {
                    NProgress.done();
                    this.value = 0;
                },
                add: function (v) {
                    this.value += v;
                      
                    if (!v) {
                        NProgress.inc();
                    } else {
                        NProgress.set(this.value); 
                    }
                    if (this.value > 1) {
                        this.hide();
                    }

                    return this.value;
                }

            },

            notice: {
                success: function (msg, title) {
                    toastr.success(msg, title)
                },
                error: function (msg, title) {
                    toastr.error(msg, title)
                },
                info: function (msg, title) {
                    toastr.info(msg, title)
                }
            }

        }
    }

    inner.utils.pageAfterFunction.push(function () {
        inner.utils.load();
    });

    return inner;
}())

$(function () {
    _gspFinallyExecute();
})

function _gspFinallyExecute() {
    $.each(gsp.utils.pageAfterFunction, function (i, handler) {
        handler();
    })
}




