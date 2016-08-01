require("../css/global.css");
require("../components/ieCompatible/init")

require.ensure(["knockout"], function() {

    //ko components register

    ko.components.register('top-nav', require("../components/top-nav/main"));
    ko.components.register('home-center', require("../components/home-center/main"));

    //Temporarily redirect ko.applyBindings to scope it to this live example
    var realKoApplyBindings1 = ko.applyBindings;
    ko.applyBindings = function() {
        if (arguments.length === 1)
            return ko.applyBindings(arguments[0], document.getElementById('app'));
        return realKoApplyBindings1.apply(ko, arguments);
    }

    /*<![CDATA[*/

    function MyViewModel1() {
        this.topNav =  {
            links: {
                knowledge: "knowledge.html",
                question: "list.html",
                experience: "list.html"
            }
        }
            
        this.homeCenter = {
            links: {
                knowledge: "knowledge.html",
                question: "list.html",
                experience: "list.html"
            }
        };

    }

    ko.applyBindings(new MyViewModel1());
    /*]]>*/

    ko.applyBindings = realKoApplyBindings1;




})