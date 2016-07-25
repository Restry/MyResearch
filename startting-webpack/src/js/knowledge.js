


require.ensure(["knockout"], function() {

        ko.components.register('top-nav', require("../components/top-nav/main"));

        ko.components.register('treeview', require("../components/treeview/init"));


});
