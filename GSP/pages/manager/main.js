define(["knockout", "text!./index.html"], function (ko, homeTemplate) {

    //ko绑定数据
    function ManagerViewModel() {
        var _self = this;
        _self.schedule = ko.observableArray();
        _self.area1 = ko.observableArray();
        _self.area2 = ko.observableArray();
        _self.team1 = ko.observableArray();
        _self.team2 = ko.observableArray();
        _self.userinfo = {};
        _self.menu = {};

        // var res = _CommunicationHelper.get(gspsetting.api_baseurl + "api/BackLog");
        // _self.schedule({
        //     schedule_title: '查看历史待办',
        //     scheduledata: res.data.schedule
        // });

        //切换tabs时，加载数据
        _self.areaClick = function () {
            var data = [
                { 'title': '江苏省分行', 'world': '9', 'headoffice': '9', 'branch': '9', 'commonly': '9' },
                { 'title': '河南省分行', 'world': '9', 'headoffice': '9', 'branch': '9', 'commonly': '9' },
                { 'title': '河北省分行', 'world': '9', 'headoffice': '9', 'branch': '9', 'commonly': '9' },
                { 'title': '山东省分行', 'world': '9', 'headoffice': '9', 'branch': '9', 'commonly': '9' },
                { 'title': '山西省分行', 'world': '9', 'headoffice': '9', 'branch': '9', 'commonly': '9' },
                { 'title': '湖南省分行', 'world': '9', 'headoffice': '9', 'branch': '9', 'commonly': '9' },
            ]
            _self.area1(data);
            _self.area2(data);
        }

        _self.teamClick =function() {
            var data = [
                { 'title': '1团队', 'world': '9', 'headoffice': '9', 'branch': '9', 'commonly': '9' },
                { 'title': '1团队', 'world': '9', 'headoffice': '9', 'branch': '9', 'commonly': '9' },
                { 'title': '1团队', 'world': '9', 'headoffice': '9', 'branch': '9', 'commonly': '9' },
                { 'title': '1团队', 'world': '9', 'headoffice': '9', 'branch': '9', 'commonly': '9' },
                { 'title': '1团队', 'world': '9', 'headoffice': '9', 'branch': '9', 'commonly': '9' },
                { 'title': '1团队', 'world': '9', 'headoffice': '9', 'branch': '9', 'commonly': '9' },
            ]
            _self.team1(data);
            _self.team2(data);
        }

        //所有待办日期
        var data = [{ date: '2016-09-27' }, { date: '2016-10-17' }, { date: '2016-10-21' }, { date: '2016-11-17' }, { date: '2016-12-17' }]
        // $('#calendar').datepicker({
        //     format: "yyyy/mm/dd",
        //     language: "zh-CN",
        //     todayHighlight: true,
        //     toggleActive: true,
        //     beforeShowDay: function (date) {
        //         var date = formatDate(date);
        //         var flag = false;
        //         data.forEach(function (item) {
        //             if (date == item.date) {
        //                 flag = true;
        //                 return false;
        //             }
        //         });
        //         if (flag) {
        //             return {
        //                 classes: 'remark'
        //             };
        //         }
        //     }
        // }).on('changeDate', function (e) {

        //     var flag = false;
        //     var selectedDay = formatDate(e.date);

        //     data.forEach(function (item) {
        //         if (selectedDay == item.date) {
        //             flag = true;
        //             return false;
        //         }
        //     });
        //     if (flag) {
        //         var res = _CommunicationHelper.get(gspsetting.api_baseurl + "api/BackLog/5");
        //         _self.schedule({
        //             schedule_title: selectedDay,
        //             scheduledata: res.data.schedule
        //         });
        //     } else {
        //         _self.schedule({
        //             schedule_title: selectedDay,
        //             scheduledata: null
        //         });
        //     }




        // });
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



    ManagerViewModel.prototype.dispose = function () {
        
        toastr.info('Disposing ManagerViewModel components');
    };

    return { viewModel: ManagerViewModel, template: homeTemplate };
})
