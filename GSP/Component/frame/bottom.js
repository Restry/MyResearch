define([
'text!./bottom.html'
], function (htmlStr) {

    //var  = require('text!a.html');
    function viewModel(params) {
        var model={}; 
        return model;
    }


    return {
        viewModel: viewModel,
        template: htmlStr
    }

});
