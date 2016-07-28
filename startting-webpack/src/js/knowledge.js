require("../css/global.css");
require("../css/knowledge.css");
require("../components/ieCompatible/init")


require.ensure(["knockout"], function() {

    ko.components.register('top-nav', require("../components/top-nav/main"));
    ko.components.register('treeview', require("../components/treeview/load"));
    ko.components.register('banner', require("../components/banner/init"));



    //Temporarily redirect ko.applyBindings to scope it to this live example
    var realKoApplyBindings = ko.applyBindings;
    ko.applyBindings = function() {
        if (arguments.length === 1)
            return ko.applyBindings(arguments[0], document.getElementById('app'));
        return realKoApplyBindings.apply(ko, arguments);
    }

    /*<![CDATA[*/

    function ViewModel() {
        var viewModel = {};

        viewModel.topNav = {
            links: {
                knowledge: "knowledge.html",
                question: "question.html",
                experience: "experience.html"
            }
        }
        viewModel.links = [{
            url: "#",
            text: "文档库"
        }, {
            url: "#",
            text: "搜索"
        }];
        viewModel.breadcrumbs = ko.observableArray();
        viewModel.node= ko.observable();
       
        viewModel.settings = {
            async: {
                enable: true,
                url: "http://22.11.140.236:83/api/Tree/ChildrenNode?key=root_1&nodeType=undefined",
                autoParam: ["id=key","nodeType"],
                type: "get",
                dataType: "text",
                otherParam: {
                    "tenantID": 3
                }
            },
            simpleData: {
                enable: true,
                idKey: "nodeType",
                pIdKey: "key",
                rootPId: "T3",
                isParent:"folder"
            },
            callback: {
                onExpand: function(event, treeId, treeNode) {
                    viewModel.breadcrumbs(treeNode.getPath());
                }
            },
            data: {
            	key: {
            	        name: "title"
            	}
            },
            keep:{
                    parent:true
            }
            // treeNode: {
            // 	isParent: true
            // }
        };

        return viewModel;

    }

    ko.applyBindings(new ViewModel());
    /*]]>*/

    ko.applyBindings = realKoApplyBindings;

});