
require("./css/bootstrap.min.css")
require("./css/gsp.min.css")
require("./css/demo/gsp-demo-icons.css")
require("./plugins/morris-js/morris.min.css")
require("./plugins/magic-check/css/magic-check.min.css")
require("./plugins/pace/pace.min.css")

var header = require("./views/tpl/header.html");
var center = require("./views/tpl/center.html");
var footer = require("./views/tpl/footer.html");
var demoSet = require("./views/tpl/demo-set.html");

require("bootstrap");

getId("navbar").innerHTML=header;
console.log("loaded:"+header.length);
getId("center").innerHTML=center;
console.log("loaded:"+center.length);
getId("footer").innerHTML=footer;
console.log("loaded:"+footer.length);
getId("gsp-set").innerHTML=demoSet;
console.log("loaded:"+demoSet.length);

function getId(id){
    return document.getElementById(id);
}

require( "./plugins/pace/pace.min.js")

require("./js/gsp.js")
require("./js/demo/gsp-demo.js")

require("./plugins/morris-js/morris.js")
//require("./plugins/morris-js/raphael-js/raphael.min.js")

require("./plugins/sparkline/jquery.sparkline.js")

require( "./js/demo/dashboard.js");
