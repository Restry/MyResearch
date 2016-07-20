
// Forms-Text-Editor.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - Back of China -


$(document).ready(function() {

    // SUMMERNOTE
    // =================================================================
    // Require Summernote
    // http://hackerwins.github.io/summernote/
    // =================================================================
    $('#gsp-summernote, #gsp-summernote-full-width').summernote({
        height : '230px'
    });




    // SUMMERNOTE AIR-MODE
    // =================================================================
    // Require Summernote
    // http://hackerwins.github.io/summernote/
    // =================================================================
    $('#gsp-summernote-airmode').summernote({
        airMode: true
    });





    // SUMMERNOTE CLICK TO EDIT
    // =================================================================
    // Require Summernote
    // http://hackerwins.github.io/summernote/
    // =================================================================
    $('#gsp-edit-text').on('click', function(){
        $('#gsp-summernote-edit').summernote({focus: true});
    });


    $('#gsp-save-text').on('click', function(){
        $('#gsp-summernote-edit').summernote('destroy');
    });

})
