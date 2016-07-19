
// Form-Wizard.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - Back of China -


$(document).ready(function() {



    // FORM WIZARD
    // =================================================================
    // Require Bootstrap Wizard
    // http://vadimg.com/twitter-bootstrap-wizard-example/
    // =================================================================


    // MAIN FORM WIZARD
    // =================================================================
    $('#gsp-main-wz').bootstrapWizard({
        tabClass		: 'wz-steps',
        nextSelector	: '.next',
        previousSelector	: '.previous',
        onTabClick: function(tab, navigation, index) {
            return false;
        },
        onInit : function(){
            $('#gsp-main-wz').find('.finish').hide().prop('disabled', true);
        },
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index+1;
            var $percent = ($current/$total) * 100;
            var wdt = 100/$total;
            var lft = wdt*index;

            $('#gsp-main-wz').find('.progress-bar').css({width:wdt+'%',left:lft+"%", 'position':'relative', 'transition':'all .5s'});


            // If it's the last tab then hide the last button and show the finish instead
            if($current >= $total) {
                $('#gsp-main-wz').find('.next').hide();
                $('#gsp-main-wz').find('.finish').show();
                $('#gsp-main-wz').find('.finish').prop('disabled', false);
            } else {
                $('#gsp-main-wz').find('.next').show();
                $('#gsp-main-wz').find('.finish').hide().prop('disabled', true);
            }
        }
    });




    // CLASSIC STYLE
    // =================================================================
    $('#gsp-cls-wz').bootstrapWizard({
        tabClass		: 'wz-classic',
        nextSelector	: '.next',
        previousSelector	: '.previous',
        onTabClick: function(tab, navigation, index) {
            return false;
        },
        onInit : function(){
            $('#gsp-cls-wz').find('.finish').hide().prop('disabled', true);
        },
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index+1;
            var $percent = ($current/$total) * 100;
            var wdt = 100/$total;
            var lft = wdt*index;
            $('#gsp-cls-wz').find('.progress-bar').css({width:$percent+'%'});

            // If it's the last tab then hide the last button and show the finish instead
            if($current >= $total) {
                $('#gsp-cls-wz').find('.next').hide();
                $('#gsp-cls-wz').find('.finish').show();
                $('#gsp-cls-wz').find('.finish').prop('disabled', false);
            } else {
                $('#gsp-cls-wz').find('.next').show();
                $('#gsp-cls-wz').find('.finish').hide().prop('disabled', true);
            }
        }
    });




    // BUBBLE NUMBERS
    // =================================================================
    $('#gsp-step-wz').bootstrapWizard({
        tabClass		: 'wz-steps',
        nextSelector	: '.next',
        previousSelector	: '.previous',
        onTabClick: function(tab, navigation, index) {
            return false;
        },
        onInit : function(){
            $('#gsp-step-wz').find('.finish').hide().prop('disabled', true);
        },
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index+1;
            var $percent = (index/$total) * 100;
            var wdt = 100/$total;
            var lft = wdt*index;
            var margin = (100/$total)/2;
            $('#gsp-step-wz').find('.progress-bar').css({width:$percent+'%', 'margin': 0 + 'px ' + margin + '%'});


            // If it's the last tab then hide the last button and show the finish instead
            if($current >= $total) {
                $('#gsp-step-wz').find('.next').hide();
                $('#gsp-step-wz').find('.finish').show();
                $('#gsp-step-wz').find('.finish').prop('disabled', false);
            } else {
                $('#gsp-step-wz').find('.next').show();
                $('#gsp-step-wz').find('.finish').hide().prop('disabled', true);
            }
        }
    });



    // FORM WIZARD WITH TOOLTIP
    // =================================================================
    $('#gsp-cir-wz').bootstrapWizard({
        tabClass		    : 'wz-steps',
        nextSelector	    : '.next',
        previousSelector    : '.previous',
        onTabClick: function(tab, navigation, index) {
            return false;
        },
        onInit : function(){
            $('#gsp-cir-wz').find('.finish').hide().prop('disabled', true);
        },
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index+1;
            var $percent = (index/$total) * 100;
            var margin = (100/$total)/2;
            $('#gsp-cir-wz').find('.progress-bar').css({width:$percent+'%', 'margin': 0 + 'px ' + margin + '%'});

            navigation.find('li:eq('+index+') a').trigger('focus');


            // If it's the last tab then hide the last button and show the finish instead
            if($current >= $total) {
                $('#gsp-cir-wz').find('.next').hide();
                $('#gsp-cir-wz').find('.finish').show();
                $('#gsp-cir-wz').find('.finish').prop('disabled', false);
            } else {
                $('#gsp-cir-wz').find('.next').show();
                $('#gsp-cir-wz').find('.finish').hide().prop('disabled', true);
            }
        }
    })




    // FORM WIZARD WITH VALIDATION
    // =================================================================
    $('#gsp-bv-wz').bootstrapWizard({
        tabClass		    : 'wz-steps',
        nextSelector	    : '.next',
        previousSelector	: '.previous',
        onTabClick          : function(tab, navigation, index) {
            return false;
        },
        onInit : function(){
            $('#gsp-bv-wz').find('.finish').hide().prop('disabled', true);
        },
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index+1;
            var $percent = ($current/$total) * 100;
            var wdt = 100/$total;
            var lft = wdt*index;

            $('#gsp-bv-wz').find('.progress-bar').css({width:wdt+'%',left:lft+"%", 'position':'relative', 'transition':'all .5s'});

            // If it's the last tab then hide the last button and show the finish instead
            if($current >= $total) {
                $('#gsp-bv-wz').find('.next').hide();
                $('#gsp-bv-wz').find('.finish').show();
                $('#gsp-bv-wz').find('.finish').prop('disabled', false);
            } else {
                $('#gsp-bv-wz').find('.next').show();
                $('#gsp-bv-wz').find('.finish').hide().prop('disabled', true);
            }
        },
        onNext: function(){
            isValid = null;
            $('#gsp-bv-wz-form').bootstrapValidator('validate');


            if(isValid === false)return false;
        }
    });




    // FORM VALIDATION
    // =================================================================
    // Require Bootstrap Validator
    // http://bootstrapvalidator.com/
    // =================================================================

    var isValid;
    $('#gsp-bv-wz-form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
        valid: 'fa fa-check-circle fa-lg text-success',
        invalid: 'fa fa-times-circle fa-lg',
        validating: 'fa fa-refresh'
        },
        fields: {
        username: {
            message: 'The username is not valid',
            validators: {
                notEmpty: {
                    message: 'The username is required.'
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: 'The email address is required and can\'t be empty'
                },
                emailAddress: {
                    message: 'The input is not a valid email address'
                }
            }
        },
        firstName: {
            validators: {
                notEmpty: {
                    message: 'The first name is required and cannot be empty'
                },
                regexp: {
                    regexp: /^[A-Z\s]+$/i,
                    message: 'The first name can only consist of alphabetical characters and spaces'
                }
            }
        },
        lastName: {
            validators: {
                notEmpty: {
                    message: 'The last name is required and cannot be empty'
                },
                regexp: {
                    regexp: /^[A-Z\s]+$/i,
                    message: 'The last name can only consist of alphabetical characters and spaces'
                }
            }
        },
        phoneNumber: {
            validators: {
                notEmpty: {
                    message: 'The phone number is required and cannot be empty'
                },
                digits: {
                    message: 'The value can contain only digits'
                }
            }
        },
        address: {
            validators: {
                notEmpty: {
                    message: 'The address is required'
                }
            }
        }
        }
    }).on('success.field.bv', function(e, data) {
        // $(e.target)  --> The field element
        // data.bv      --> The BootstrapValidator instance
        // data.field   --> The field name
        // data.element --> The field element

        var $parent = data.element.parents('.form-group');

        // Remove the has-success class
        $parent.removeClass('has-success');


        // Hide the success icon
        //$parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]').hide();
    }).on('error.form.bv', function(e) {
        isValid = false;
    });



});
