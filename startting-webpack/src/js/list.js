require("../css/global.css");
require("../css/knowledge.css");
require("../components/ieCompatible/init")


require.ensure(["knockout"], function() {

    ko.components.register('top-nav', require("../components/top-nav/main"));
    ko.components.register('filter', require("../components/filter/load"));
    ko.components.register('table', require("../components/table/load")); 



    //Temporarily redirect ko.applyBindings to scope it to this live example
    var realKoApplyBindings = ko.applyBindings;
    ko.applyBindings = function() {
        if (arguments.length === 1)
            return ko.applyBindings(arguments[0], document.getElementById('app'));
        return realKoApplyBindings.apply(ko, arguments);
    }

    /*<![CDATA[*/ 
    function ViewModel() {
        var model = {
            page: {
                title: ko.observable("问题沟通"),
                
                edit:function (params) {

                    
                }
            }
        };
 

        model.params = {
            query: ko.observable(), //点击搜索后的过滤串
            

            filterTypes: ["1", "2", "3"]
        }


        return model;

    }

    ko.applyBindings(new ViewModel());
    /*]]>*/

    ko.applyBindings = realKoApplyBindings;

});

 