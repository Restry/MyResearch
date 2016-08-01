var html = require("./top-nav.html");

function viewModel(params) {
    this.links = params.links || {
        knowledge: "knowledge.html",
        question: "question.html",
        experience: "experience.html"
    };

}


module.exports = {
    viewModel: viewModel,
    template: html
};