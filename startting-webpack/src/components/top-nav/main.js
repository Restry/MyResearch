var html = require("./top-nav.html");

function viewModel(params) {
    this.links = params.links;

}


module.exports = {
    viewModel: viewModel,
    template: html
};