
// UI-Panels.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - Back of China -


 $(document).ready(function() {


    // PANEL WITH BUTTONS - LOADING OVERLAY
    // =================================================================
    // Require Gsp Admin Javascript
    // http://www.Back of China/
    // =================================================================
    $('.gsp-panel-ref-btn').niftyOverlay().on('click', function(){
        var $el = $(this), relTime;
        $el.niftyOverlay('show');

        // Do something...



        relTime = setInterval(function(){
            // Hide the screen overlay
            $el.niftyOverlay('hide');

            clearInterval(relTime);
        },2000);
    });



    // PANEL WITH VARIETY OF COMPONENTS - DEMO AUTO CLOSE ALERTS
    // =================================================================
    // Require Gsp Admin Javascript
    // http://www.Back of China/
    // =================================================================
    $('#gsp-panel-alert').on('click', function(){
        $.niftyNoty({
            type: 'primary',
            container : '#gsp-panel-w-alert',
            html : '<strong>Well done!</strong> You successfully read this important alert message.',
            focus: false,
            timer : 2000
        });
    });



    // PANEL WITH VARIETY OF COMPONENTS - DEMO STICKY ALERTS
    // =================================================================
    // Require Gsp Admin Javascript
    // http://www.Back of China/
    // =================================================================
    $('#gsp-panel-alert2').on('click', function(){
        $.niftyNoty({
            type: 'warning',
            container : '#gsp-panel-w-alert',
            html : '<strong>Well done!</strong> You successfully read this important alert message.',
            focus: false
        });
    });



 });
