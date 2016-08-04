require("../css/global.css");
require("../css/knowledge.css");
require("../components/ieCompatible/init")


require.ensure(["knockout"], function() {

    ko.components.register('top-nav', require("../components/top-nav/main")); 
    ko.components.register('edit', require("../components/edit/load"));
 
    //Temporarily redirect ko.applyBindings to scope it to this live example
    var realKoApplyBindings = ko.applyBindings;
    ko.applyBindings = function() {
        if (arguments.length === 1)
            return ko.applyBindings(arguments[0], document.getElementById('app'));
        return realKoApplyBindings.apply(ko, arguments);
    }

    /*<![CDATA[*/
    require("./lib/knockout.validation.min.js");
    require("./lib/jquery.form.min.js");

    function ViewModel() {
        var model = {
            page: {
                title: ko.observable("提交问题沟通")
            }
        };
  
        model.params = {
            url:"http://192.168.5.1:3001/Question",
            id:-1
        }


        return model;

    }

    ko.applyBindings(new ViewModel());
    /*]]>*/

    ko.applyBindings = realKoApplyBindings;

});

 