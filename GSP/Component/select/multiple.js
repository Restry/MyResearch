define([
    'text!./multiple.html'
], function (htmlStr) {

    ko.bindingHandlers.dropdown = {
        init: function (elem, valueAccessor, allBindings, viewModel, bindingContext) {
            elem.setAttribute("id", viewModel.id);
        }
    }
    function viewModel(params) {

        document.getElementsByClassName('alonechk').onclick = function () {
            alert(111)
            var _self = this;
            //alert(_self.checked);
        }

        var model = {};
        model.id = _CreateGuid();
        model.selectdata = ko.observable(params.data);
        model.chkValue = ko.observable();
        //model.alonechk = ko.observable();

        model.selclick = function () {
            var _self = $('#' + model.id + ' .dropdown-toggle');
            var $menu = _self.next(".dropdown-menu").first();
            if (_self.parent().hasClass('open') && $menu.hasClass('open')) {
                _self.parent().removeClass('open');
                $menu.removeClass("open");
            } else {
                _self.parent().addClass('open');
                $menu.addClass("open");
            }
        }

        //model.aloneClick = function (ev, ev1) {

        //    $("#" + model.id + " .dropdown-menu-child input[type='checkbox']").each(function () {
        //        var code = $(this).val();     
        //        $(this).prop("checked", false);
        //    });


        //}

        model.selectall = function () {
            var _self = $("#" + model.id + " .SelectAll");
            var $chk = _self.find('.magic-checkbox').first();

            // $('#selectAll1').prop("checked", true);

            if ($chk.prop("checked")) {
                $chk.prop("checked", false)
                $("#" + model.id + " .dropdown-menu-child input[type='checkbox']").each(function () {
                    $(this).prop("checked", false);
                });
            }
            else {
                $chk.prop("checked", true)
                $("#" + model.id + " .dropdown-menu-child input[type='checkbox']").each(function () {
                    $(this).prop("checked", true);
                });
            }
        }

        model.selectall2 = function () {
            
            var _self = $("#" + model.id + " .SelectAll");
            var $chk = _self.find('.magic-checkbox').first();

            if ($chk.prop("checked")) {
                $("#" + model.id + " .dropdown-menu-child input[type='checkbox']").each(function () {
                    $(this).prop("checked", true);
                });
               // model.chkValue(true);
            }
            else {
              
                $("#" + model.id + " .dropdown-menu-child input[type='checkbox']").each(function () {
                    $(this).prop("checked", false);
                });
               // model.chkValue(false);
            }

            return true;
        }

        model.confirmclick = function () {
            var chkId = ''; //选中ID
            var chkValue = '';  //选中项的值
            $("#" + model.id + " .dropdown-menu-child input[type='checkbox']").each(function () {
                if ($(this).prop("checked")) {
                    chkId += $(this).val() + ',';
                    chkValue += $(this).attr('data-title') + ',';
                }
            });

            if (chkId != '' && chkValue != '') {
                chkId = chkId.substring(0, chkId.length - 1)
                chkValue = chkValue.substring(0, chkValue.length - 1);
                $("#" + model.id + " .filter-option").text(chkValue);
                $("#" + model.id + " .filter-option-id").text(chkId);
            } else {
                $("#" + model.id + " .filter-option").text("--请选择--");
                $("#" + model.id + " .filter-option-id").text("");
            }

            $("#" + model.id + " .dropdown-toggle").next(".dropdown-menu").first().removeClass("open");
            $("#" + model.id + " .dropdown-toggle").parent().removeClass("open");

            params.id = chkId;
        }

        

        return model;
    }




    return {
        viewModel: viewModel,
        template: htmlStr
    }
});