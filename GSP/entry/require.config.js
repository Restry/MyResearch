// require.js looks for the following global when initializing
var require = {
    baseUrl: "/",
    paths: {
        "jquery": "modules/jquery",
        "knockout": "modules/knockout",
        "signals": "modules/signals",
        "hasher": "modules/hasher",
        "text": "modules/text",
        "toastr": "Assets/scripts/toastr.min",
        "nprogress": "Assets/scripts/nprogress",
        "bootstrap": "modules/bootstrap",
        "bootstrap-select": "modules/bootstrap-select.min",
        "crossroads": "modules/crossroads"
    },
    shim: {
          "bootstrap":            { deps: ["jquery"] },
          "bootstrap-select":            { deps: ["jquery"] },
        //  "globalize":            { deps: ["jquery"], exports: 'window.Globalize' }
    }
};
