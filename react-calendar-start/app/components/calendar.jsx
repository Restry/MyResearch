import React from 'react'
import Clist from './clist';

var inlineStyle={height:' 400px'}

export default React.createClass({
    getInitialState: function() {
        return {
            options: {
                events_source: 'http://localhost:61411/api/calendar',
                view: 'month',
                tmpl_path: 'tmpls/',
                tmpl_cache: false,
                language:"zh-CN",
              //  day: '2013-03-12',
                onAfterEventsLoad: function(events) {
                    if (!events) {
                        return;
                    }

                    // var list = $('#eventlist');
                    // list.html('');

                    // $.each(events, function(key, val) {
                    //     $(document.createElement('li'))
                    //         .html('<a href="' + val.url + '">' + val.title + '</a>')
                    //         .appendTo(list);
                    // });
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
        
    //    var calendarWarp = require('../tmpls/calendar.html');
        // this.state.myModel
      //  $(this.refs.placeholder).append(calendarWarp);
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
        return <div className="container">
            
                <div className="page-header">
                    <div className="pull-right form-inline">
                        <div className="btn-group">
                            <button className="btn btn-primary" data-calendar-nav="prev">{'<<'} 向前</button>
                            <button className="btn btn-default" data-calendar-nav="today">今天</button>
                            <button className="btn btn-primary" data-calendar-nav="next">向后 {'>>'}</button>
                        </div>
                        <div className="btn-group">
                            <button className="btn btn-warning" data-calendar-view="year">年</button>
                            <button className="btn btn-warning active" data-calendar-view="month">月</button>
                            <button className="btn btn-warning" data-calendar-view="week">周</button>
                            <button className="btn btn-warning" data-calendar-view="day">日</button>
                        </div>
                    </div>

                    <h3></h3>
                    <small></small>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <div ref = "placeholder" id="calendar"></div>
                    </div>
                    <div className="col-md-4">
                        <Clist/>
                    </div>
                </div>

                <div className="clearfix"></div>


                <div className="modal fade" id="events-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h3 className="modal-title">Event</h3>
                            </div>
                            <div className="modal-body" style={inlineStyle}>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>;
    }
});