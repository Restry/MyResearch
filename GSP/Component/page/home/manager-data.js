
define([
    'text!./manager-data.html'
], function (htmlStr) {
    function viewModel(params) {
        this.manager_title = params.manager_title;
        this.menu = _MenuInfo;
    }

    return {
        viewModel: viewModel,
        template: htmlStr
    }

});

