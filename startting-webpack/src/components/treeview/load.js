

var html = require("./tpl.html");

function viewModel(params) {
   
    require.ensure([], function() {
        
        require("./ztreestyle/ztreestyle.css");
        require("./jquery.ztree.core.js");
        
        $(function(){
            jQuery.support.cors = true;
            $.fn.zTree.init($("#treeDemo"), params.settings);
       
        })
    });

    this.node=params.node;
}


module.exports = {
    viewModel: viewModel,
    template: html
};
