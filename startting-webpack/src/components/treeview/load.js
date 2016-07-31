

var html = require("./tpl.html");

function viewModel(params) {
   var model ={};

    require.ensure([], function() {
        
        require("./ztreestyle/ztreestyle.css");
        require("./jquery.ztree.core.js");
        
        $(function(){
            $.ajaxSetup ({ cache: false}); 
            jQuery.support.cors = true;
            $.fn.zTree.init($("#treeDemo"), params.settings);
       
        })
    });

    model.list= ko.observableArray();
    

    model.node=params.node;
    model.node.subscribe(function(value){
       // alert(value);
            $.ajaxSetup ({ cache: false}); 
       $.getJSON("http://192.168.10.1:3000/docs?cid="+value).done(function(res){
            model.list(res);
       })
    })
return model;
}


module.exports = {
    viewModel: viewModel,
    template: html
};
