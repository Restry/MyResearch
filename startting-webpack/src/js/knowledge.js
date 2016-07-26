require("../css/global.css");
require("../components/ieCompatible/init")


require.ensure(["knockout"], function() {

        ko.components.register('top-nav', require("../components/top-nav/main"));

        ko.components.register('treeview', require("../components/treeview/load"));



        //Temporarily redirect ko.applyBindings to scope it to this live example
        var realKoApplyBindings = ko.applyBindings;
        ko.applyBindings = function() {
                if (arguments.length === 1)
                        return ko.applyBindings(arguments[0], document.getElementById('app'));
                return realKoApplyBindings.apply(ko, arguments);
        }

        /*<![CDATA[*/

        function ViewModel() {
                this.topNav = {
                        links: {
                                knowledge: "#knowledge",
                                question: "#question",
                                experience: "#experience"
                        }
                }
                this.settings = {
                        async: {
                                enable: true,
                                url: "http://192.168.5.1:3000/random",
                                autoParam: ["id=pid"],
                                type: "get",
				dataType : "text",
                                otherParam: {"isParent": true}
                        },
                        simpleData: {
                                enable: true,
                                idKey: "id",
                                pIdKey: "pid",
                                rootPId: "Depart-3954676093"
                        }
                        // data: {
                        // 	key: {
                        // 		name: "title"
                        // 	}
                        // },
                        // treeNode: {
                        // 	isParent: true
                        // }
                };

        }

        ko.applyBindings(new ViewModel());
        /*]]>*/

        ko.applyBindings = realKoApplyBindings;

});