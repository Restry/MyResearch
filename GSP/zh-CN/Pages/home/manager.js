'use strict';
var baseUrl = '../../';

requirejs.config({
    baseUrl: baseUrl,
    paths: {
        'text': '../Assets/Scripts/text'
    },
    shim: {
    },
    urlArgs: 'v=1.0.0.3' + new Date()  //开发环境防止缓存。开发环境只是用版本号控制
});

//注册公共组件
ko.components.register('page_header', { require: 'Component/frame/header' });
ko.components.register('page_footer', { require: 'Component/frame/bottom' });

//领导日程
ko.components.register('schedule', { require: 'Component/page/home/schedule' });

ko.components.register('area-data1', { require: 'Component/page/home/customer-group-table' });
ko.components.register('area-data2', { require: 'Component/page/home/customer-group-table' });
//核心数据
ko.components.register('core', { require: 'Component/page/home/manager-data' });

//交叉数据
ko.components.register('corss', { require: 'Component/page/home/manager-data' });

ko.components.register('information-link', { require: 'Component/page/home/information-link' });

define(function () {
    //ko绑定数据
    function viewMdoel() {
        var _self = this;
        _self.schedule = ko.observableArray();
        _self.area1 = ko.observableArray();
        _self.area2 = ko.observableArray();
        _self.userinfo = _UserInfo.local();
        _self.menu = _MenuInfo;

        var res = _CommunicationHelper.get(gspsetting.api_baseurl + "api/BackLog");
        _self.schedule({
            schedule_title: '查看历史待办',
            scheduledata: res.data.schedule
        });

        //var model = {};
        //$.ajax({ 
        //    url: gspsetting.api_baseurl + "api/BackLog",
        //    cache: false,
        //    type: "GET",
        //    async: false,
        //    success: function (res) {
        //        _self.schedule({
        //            schedule_title: '查看历史待办',
        //            scheduledata: res.schedule
        //        });
        //    },
        //    error: function (res) {
        //        alert(JSON.stringify(res));
        //    }
        //});

        //切换tabs时，加载数据
        _self.areaClick = function () {
            _self.area1([{ 'world': '9', 'headoffice': '9', 'branch': '9', 'commonly': '9' }]);
        }

        //所有待办日期
        var data = [{ date: '2016-09-27' }, { date: '2016-10-17' }, { date: '2016-10-21' }, { date: '2016-11-17' }, { date: '2016-12-17' }]
        $('#calendar').datepicker({
            format: "yyyy/mm/dd",
            language: "zh-CN",
            todayHighlight: true,
            toggleActive: true,
            beforeShowDay: function (date) {
                var date = formatDate(date);
                var flag = false;
                data.forEach(function (item) {
                    if (date == item.date) {
                        flag = true;
                        return false;
                    }
                });
                if (flag) {
                    return {
                        classes: 'remark'
                    };
                }
            }
        }).on('changeDate', function (e) {

            var flag = false;
            var selectedDay = formatDate(e.date);

            data.forEach(function (item) {
                if (selectedDay == item.date) {
                    flag = true;
                    return false;
                }
            });
            if (flag) {
                var res = _CommunicationHelper.get(gspsetting.api_baseurl + "api/BackLog/5");
                _self.schedule({
                    schedule_title: selectedDay,
                    scheduledata: res.data.schedule
                });
            } else {
                _self.schedule({
                    schedule_title: selectedDay,
                    scheduledata: null
                });
            }




        });
    }

    function formatTen(num) {
        return num > 9 ? (num + "") : ("0" + num);
    }

    function formatDate(date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        return year + "-" + formatTen(month) + "-" + formatTen(day);
    }

    ko.applyBindings(new viewMdoel());
})












