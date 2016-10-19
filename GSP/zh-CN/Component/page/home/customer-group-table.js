
define([
    'text!./customer-group-table.html'
], function (htmlStr) {
    function viewModel(params) {
        this.customer = ko.observable(params);
    }

    return {
        viewModel: viewModel,
        template: htmlStr
    }

});

