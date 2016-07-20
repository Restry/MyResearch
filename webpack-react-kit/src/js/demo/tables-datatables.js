
// Tables-DataTables.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - Back of China -



$(window).on('load', function() {


    // DATA TABLES
    // =================================================================
    // Require Data Tables
    // -----------------------------------------------------------------
    // http://www.datatables.net/
    // =================================================================

    $.fn.DataTable.ext.pager.numbers_length = 5;


    // Basic Data Tables with responsive plugin
    // -----------------------------------------------------------------
    $('#gsp-dt-basic').dataTable( {
        "responsive": true,
        "language": {
            "paginate": {
              "previous": '<i class="gsp-psi-arrow-left"></i>',
              "next": '<i class="gsp-psi-arrow-right"></i>'
            }
        }
    } );





    // Row selection (single row)
    // -----------------------------------------------------------------
    var rowSelection = $('#gsp-dt-selection').DataTable({
        "responsive": true,
        "language": {
            "paginate": {
              "previous": '<i class="gsp-psi-arrow-left"></i>',
              "next": '<i class="gsp-psi-arrow-right"></i>'
            }
        }
    });

    $('#gsp-dt-selection').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            rowSelection.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );






    // Row selection and deletion (multiple rows)
    // -----------------------------------------------------------------
    var rowDeletion = $('#gsp-dt-delete').DataTable({
        "responsive": true,
        "language": {
            "paginate": {
              "previous": '<i class="gsp-psi-arrow-left"></i>',
              "next": '<i class="gsp-psi-arrow-right"></i>'
            }
        },
        "dom": '<"toolbar">frtip'
    });
    $('#gsp-custom-toolbar').appendTo($("div.toolbar"));

    $('#gsp-dt-delete tbody').on( 'click', 'tr', function () {
        $(this).toggleClass('selected');
    } );

    $('#gsp-dt-delete-btn').click( function () {
        rowDeletion.row('.selected').remove().draw( false );
    } );






    // Add Row
    // -----------------------------------------------------------------
    var t = $('#gsp-dt-addrow').DataTable({
        "responsive": true,
        "language": {
            "paginate": {
              "previous": '<i class="gsp-psi-arrow-left"></i>',
              "next": '<i class="gsp-psi-arrow-right"></i>'
            }
        },
        "dom": '<"newtoolbar">frtip'
    });
    $('#gsp-custom-toolbar2').appendTo($("div.newtoolbar"));

    $('#gsp-dt-addrow-btn').on( 'click', function () {
        t.row.add( [
            'Adam Doe',
            'New Row',
            'New Row',
            gsp.randomInt(1,100),
            '2015/10/15',
            '$' + gsp.randomInt(1,100) +',000'
        ] ).draw();
    } );


});
