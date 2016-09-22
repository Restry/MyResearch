

function viewModel(params) {
    var model = {title:params.title};
 
    return model;
}


module.exports = {
    viewModel: viewModel,
    template: require('./tmp.html')
};


