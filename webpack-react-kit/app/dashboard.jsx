
require("./css/bootstrap.min.css")
require("./css/gsp.min.css")
require("./css/demo/gsp-demo-icons.min.css")
require("./css/gsp-demo.min.css")
require("./plugins/morris-js/morris.min.css")
require("./css/bootstrap.min.css")
require("./css/bootstrap.min.css")
require("./css/bootstrap.min.css")

let header = require("./views/tpl/header.html");
let center = require("./views/tpl/center.html");
let footer = require("./views/tpl/footer.html");
let demoSet = require("./views/tpl/demo-set.html");

import "bootstrap";

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

import "./js/demo/dashboard.js";