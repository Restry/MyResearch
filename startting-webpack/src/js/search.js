require("../css/global.css");
require("../css/knowledge.css");
require("../components/ieCompatible/init")
if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    }
}
jQuery.support.cors = true;

require.ensure(["knockout"], function() {

    ko.components.register('top-nav', require("../components/top-nav/main"));
    ko.components.register('search', require("../components/search/load"));
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
        viewModel.node = ko.observable();

        viewModel.url = "http://192.168.5.1:3000/names";

        //     data: {
        //     	key: {
        //     	        name: "title"
        //     	}
        //     },
        // keep:{
        //         parent:true
        // }
        // treeNode: {
        // 	isParent: true
        // }
        //  };

        return viewModel;

    }

    ko.applyBindings(new ViewModel());
    /*]]>*/

    ko.applyBindings = realKoApplyBindings;

});