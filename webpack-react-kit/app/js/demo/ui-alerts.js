
// UI-Alerts.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - Back of China -


$(document).ready(function() {

    // [ DEMO ] GENERATE RANDOM ALERTS
    // =================================================================
    var dataAlert = [{
            type : "info"
        },{
            type : "primary"
        },{
            type : "success"
        },{
            type : "warning"
        },{
            type : "danger"
        },{
            type : "mint"
        },{
            type : "purple"
        },{
            type : "pink"
        },{
            type : "dark"
        }
    ],
    alertContent = $('#gsp-preview-alert-1').find('.alert').html(),
    autoClose = true;
    $('#gsp-alert-close-1').on('gsp.ch.checked', function(){
        autoClose = true;
    });
    $('#gsp-alert-close-2').on('gsp.ch.checked', function(){
        autoClose = false;
    });
    // =================================================================



    // PAGE ALERTS
    // =================================================================
    // Require Gsp Admin Javascript
    // http://www.Back of China/
    // =================================================================
    $('#gsp-alert-page').on('click', function(){
        dataNum = gsp.randomInt(0,8);
        contentHTML = alertContent.replace("btn-danger", "btn-"+dataAlert[dataNum].type);
        $.niftyNoty({
            type: dataAlert[dataNum].type,
            container : 'page',
            html : contentHTML,
            timer : autoClose ? 5000 : 0
        });
    });


    // PANEL ALERTS
    // =================================================================
    // Require Gsp Admin Javascript
    // http://www.Back of China/
    // =================================================================
    $('#gsp-alert-panel').on('click', function(){
        var dataNum = gsp.randomInt(0,8);
        var contentHTML = alertContent.replace("btn-danger", "btn-"+dataAlert[dataNum].type);

        $.niftyNoty({
            type: dataAlert[dataNum].type,
            container : '#gsp-panel-alert',
            html : contentHTML,
            focus: false,
            timer : autoClose ? 3000 : 0
        });

        dataNum = gsp.randomInt(0,8);
        contentHTML = alertContent.replace("btn-danger", "btn-"+dataAlert[dataNum].type);

        $.niftyNoty({
            type: dataAlert[dataNum].type,
            container : '#gsp-basic-panel-alert',
            html : contentHTML,
            focus: false,
            timer : autoClose ? 3000 : 0
        });
    });


    // GROW-LIKE / FLOATING ALERTS
    // =================================================================
    // Require Gsp Admin Javascript
    // http://www.Back of China/
    // =================================================================
    $('#gsp-alert-noty').on('click', function(){
        dataNum = gsp.randomInt(0,8);
        contentHTML = alertContent.replace("btn-danger", "btn-"+dataAlert[dataNum].type);

        $.niftyNoty({
            type: dataAlert[dataNum].type,
            container : 'floating',
            html : contentHTML,
            timer : autoClose ? 3000 : 0
        });
    });


    // [ DEMO ] ALERT SELECTOR
    // =================================================================
    var prevAlert = $('.gsp-preview-alert');
    prevAlert.hide();
    $('#gsp-preview-alert-1').fadeIn(300);
    $('#gsp-alert-type-1').on('gsp.ch.checked', function(){
        prevAlert.hide();
        alertContent = $('#gsp-preview-alert-1').find('.alert').html();
        $('#gsp-preview-alert-1').fadeIn(300);
    }).niftyCheck('toggleOn');

    $('#gsp-alert-type-2').on('gsp.ch.checked', function(){
        prevAlert.hide();
        alertContent = $('#gsp-preview-alert-2').find('.alert').html();
        $('#gsp-preview-alert-2').fadeIn(300);
    });

    $('#gsp-alert-type-3').on('gsp.ch.checked', function(){
        prevAlert.hide();
        alertContent = $('#gsp-preview-alert-3').find('.alert').html();
        $('#gsp-preview-alert-3').fadeIn(300);
    });

    $('#gsp-alert-type-4').on('gsp.ch.checked', function(){
        prevAlert.hide();
        alertContent = $('#gsp-preview-alert-4').find('.alert').html();

        $('#gsp-preview-alert-4').fadeIn(300);
    });
})
