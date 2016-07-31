require("../css/global.css");
require("../css/knowledge.css");
require("../components/ieCompatible/init")
if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  }
}
            jQuery.support.cors = true;
  if (!Object.keys) {
  Object.keys = (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function (obj) {
      if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');

      var result = [];

      for (var prop in obj) {
        if (hasOwnProperty.call(obj, prop)) result.push(prop);
      }

      if (hasDontEnumBug) {
        for (var i=0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
        }
      }
      return result;
    }
  })()
};

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

        viewModel.url = "http://192.168.10.1:3000/names";
 
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