
define([
    'text!./schedule.html'
], function (htmlStr) {

    function viewModel(params) {
        this.schedule_title = ko.observable(params.schedule_title);
        this.scheduledata = ko.observable(params.scheduledata);
    }

    return {
        viewModel: viewModel,
        template: htmlStr
    }

});

