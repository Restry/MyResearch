
// Mail.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - Back of China -



 $(document).on('ready', function() {



    // MAILBOX-COMPOSE.HTML
    // =================================================================

    if ($('#gsp-mail-compose').length) {


        // SUMMERNOTE
        // =================================================================
        // Require Summernote
        // http://hackerwins.github.io/summernote/
        // =================================================================
        $('#gsp-mail-compose').summernote({
            height:500
        });


        // Show The CC Input Field
        // =================================================================
        $('#gsp-toggle-cc').on('click', function(){
            $('#gsp-cc-input').toggleClass('hide');
        });



        // Show The BCC Input Field
        // =================================================================
        $('#gsp-toggle-bcc').on('click', function(){
            $('#gsp-bcc-input').toggleClass('hide');
        });



        // Attachment button.
        // =================================================================
        $('.btn-file :file').on('fileselect', function(event, numFiles, label, fileSize) {
            $('#gsp-attach-file').html('<strong class="box-block text-capitalize"><i class="fa fa-paperclip fa-fw"></i> '+label+'</strong><small class="text-muted">'+fileSize+'</small>');
        });


        return;
    }





    // MAILBOX-MESSAGE.HTML
    // =================================================================

    // SUMMERNOTE
    // =================================================================
    // Require Summernote
    // http://hackerwins.github.io/summernote/
    // =================================================================
    if( $('#gsp-mail-textarea').length ){
        $('#gsp-mail-textarea').on('click', function(){
            $(this).empty().summernote({
                height:300,
                focus: true
            });
            $('#gsp-mail-send-btn').removeClass('hide');
        });
        return;
    }





});

