


require.ensure(["knockout"],function(){

    require("./datepicker.css");
    require("./jquery.datepicker.js");
    require("./jquery.datepicker.cn.js");

    ko.bindingHandlers.datePicker = {
        init: function (element, valueAccessor, allBindingsAccessor) {
            var options = ko.utils.unwrapObservable(valueAccessor()) || {};

            var valueBinding = allBindingsAccessor.get("value");

            $(element).datepicker(Object.assign({}, options, {
                onSelect: function() {
                    if (valueBinding) {
                        valueBinding(element.value);
                    }
                }
            }));
        }
    };

})

