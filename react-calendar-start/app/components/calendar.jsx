import React from 'react'


export default React.createClass({
    getInitialState: function() {
        return {
            options: {
                events_source: 'data.json',
                view: 'month',
                tmpl_path: 'tmpls/',
                tmpl_cache: false,
                language:"zh-CN",
                day: '2013-03-12',
                onAfterEventsLoad: function(events) {
                    if (!events) {
                        return;
                    }
                    var list = $('#eventlist');
                    list.html('');

                    $.each(events, function(key, val) {
                        $(document.createElement('li'))
                            .html('<a href="' + val.url + '">' + val.title + '</a>')
                            .appendTo(list);
                    });
                },
                onAfterViewLoad: function(view) {
                    $('.page-header h3').text(this.getTitle());
                    $('.btn-group button').removeClass('active');
                    $('button[data-calendar-view="' + view + '"]').addClass('active');
                },
                classes: {
                    months: {
                        general: 'label'
                    }
                }
            }
        };
    },

    componentDidMount: function() {

        var calendarWarp = require('../tmpls/calendar.html');
        // this.state.myModel
        $(this.refs.placeholder).append(calendarWarp);
        var options = this.state.options;

        require.ensure([], function() {

           // require('imports?this=>window!underscore');
            require('bootstrap');
            require('imports?this=>window!jstz');
            require('imports?jQuery=jquery,_=underscore!calendar');
            require('../lib/calendar.zh-cn.js')
            require('../css/calendar.css');

            var calendar = $('#calendar').calendar(options);

            $('.btn-group button[data-calendar-nav]').each(function() {
                var $this = $(this);
                $this.click(function() {
                    calendar.navigate($this.data('calendar-nav'));
                });
            });

            $('.btn-group button[data-calendar-view]').each(function() {
                var $this = $(this);
                $this.click(function() {
                    calendar.view($this.data('calendar-view'));
                });
            });


        });
    },

    componentWillUnmount: function() {
        // Clean up work here.
    },

    shouldComponentUpdate: function() {
        // Let's just never update this component again.
        return false;
    },

    render: function() {
        return <div ref = "placeholder" / > ;
    }
});