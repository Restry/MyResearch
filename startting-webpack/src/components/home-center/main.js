var html = require("./home-center.html");

function viewModel(params) { 
    this.links = params.links;

}


module.exports = {
    viewModel: viewModel,
    template: html
};