
var $=require("jquery");

function getId(id) {
    return document.getElementById(id);
}
ko.components.register('lefNav', require("../../components/left-nav/index"));


function MyViewModel1() {
 var model = {}
 model.lefnav={
     title:"Mike"
 }
 return model;
}

ko.applyBindings(new MyViewModel1());




var header = require("../common/header.js");
var center = require("../common/center.js");
var footer = require("../common/footer.js");
var demoSet = require("../common/demoset.js");

require("bootstrap3");

getId("navbar").innerHTML = header;
console.log("loaded:" + header.length);
//getId("center").innerHTML = center;
console.log("loaded:" + center.length);
getId("footer").innerHTML = footer;
console.log("loaded:" + footer.length);
getId("gsp-set").innerHTML = demoSet;
console.log("loaded:" + demoSet.length);


require("pace")

require("../../js/lib/gsp.js")
require("../../js/pages/gsp-demo.js")

require("morris.js")

 
 

