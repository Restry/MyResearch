

var html = require("./tpl.html");

function viewModel(params) {
   
  //  require.ensure(["./jquery.ztree.core.js", "./ztreestyle/ztreestyle.css"], function() {
        
        require("./ztreestyle/ztreestyle.css");
        require("./jquery.ztree.core.js");
        
        $(function(){
            jQuery.support.cors = true;
            $.fn.zTree.init($("#treeDemo"), params.settings);
       
        })
   // });
}


module.exports = {
    viewModel: viewModel,
    template: html
};
