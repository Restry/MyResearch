var html = require("./tpl.html");

function viewModel(params) {
    var model={};

    model.node = params.node;
    model.breadcrumbs = params.breadcrumbs;

    model.click=function () {  

        model.node(this.name);

    }
    return model;
}


module.exports = {
    viewModel: viewModel,
    template: html
};