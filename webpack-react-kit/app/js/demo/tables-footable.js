
// Tables-FooTable.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - Back of China -



$(window).on('load', function() {


    // FOO TABLES
    // =================================================================
    // Require FooTable
    // -----------------------------------------------------------------
    // http://fooplugins.com/footable-demos/
    // =================================================================


    // Row Toggler
    // -----------------------------------------------------------------
    $('#gsp-foo-row-toggler').footable();




    // Expand / Collapse All Rows
    // -----------------------------------------------------------------
    var fooColExp = $('#gsp-foo-col-exp');
    fooColExp.footable().trigger('footable_expand_first_row');


    $('#gsp-foo-collapse').on('click', function(){
        fooColExp.trigger('footable_collapse_all');
    });
    $('#gsp-foo-expand').on('click', function(){
        fooColExp.trigger('footable_expand_all');
    })





    // Accordion
    // -----------------------------------------------------------------
    $('#gsp-foo-accordion').footable().on('footable_row_expanded', function(e) {
        $('#gsp-foo-accordion tbody tr.footable-detail-show').not(e.row).each(function() {
            $('#gsp-foo-accordion').data('footable').toggleDetail(this);
        });
    });





    // Pagination
    // -----------------------------------------------------------------
    $('#gsp-foo-pagination').footable();
    $('#gsp-show-entries').change(function (e) {
        e.preventDefault();
        var pageSize = $(this).val();
        $('#gsp-foo-pagination').data('page-size', pageSize);
        $('#gsp-foo-pagination').trigger('footable_initialized');
    });







    // Filtering
    // -----------------------------------------------------------------
    var filtering = $('#gsp-foo-filtering');
    filtering.footable().on('footable_filtering', function (e) {
        var selected = $('#gsp-foo-filter-status').find(':selected').val();
        e.filter += (e.filter && e.filter.length > 0) ? ' ' + selected : selected;
        e.clear = !e.filter;
    });

    // Filter status
    $('#gsp-foo-filter-status').change(function (e) {
        e.preventDefault();
        filtering.trigger('footable_filter', {filter: $(this).val()});
    });

    // Search input
    $('#gsp-foo-search').on('input', function (e) {
        e.preventDefault();
        filtering.trigger('footable_filter', {filter: $(this).val()});
    });








    // Add & Remove Row
    // -----------------------------------------------------------------
    var addrow = $('#gsp-foo-addrow');
    addrow.footable().on('click', '.gsp-delete-row', function() {

        //get the footable object
        var footable = addrow.data('footable');

        //get the row we are wanting to delete
        var row = $(this).parents('tr:first');

        //delete the row
        footable.removeRow(row);
    });

    // Search input
    $('#gsp-input-search2').on('input', function (e) {
        e.preventDefault();
        addrow.trigger('footable_filter', {filter: $(this).val()});
    });

    // Add Row Button
    $('#gsp-btn-addrow').click(function() {

        //get the footable object
        var footable = addrow.data('footable');

        //build up the row we are wanting to add
        var newRow = '<tr><td><button class="gsp-delete-row btn btn-danger btn-xs"><i class="pli-cross"></i></button></td><td>Adam</td><td>Doe</td><td>Traffic Court Referee</td><td>22 Jun 1972</td><td><span class="label label-table label-success">Active</span></td></tr>';

        //add it
        footable.appendRow(newRow);
    });
});
