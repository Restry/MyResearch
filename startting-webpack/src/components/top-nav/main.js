var html = require("./top-nav.html");
var user =require("../userinfo/load");

function viewModel(params) {
    this.links = params.links || {
        knowledge: "knowledge.html",
        question: "question.html",
        experience: "experience.html"
    };
    alert(JSON.stringify(user));
}


module.exports = {
    viewModel: viewModel,
    template: html
};