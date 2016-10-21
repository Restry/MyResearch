define([
'text!./chart.html'
], function (htmlStr) {

    //chart colors
    var bathroomColors = ['#D99694', '#C35754', "#d9aba9", "#9d403e"];

    function euroFormatter(v, axis) {
        return v.toFixed(axis.tickDecimals) + "%";
    }
    //柱形图
    function barChart(id, data) {
        if (data.length > 0) {
            var data1 = [];
            var ticks = [];
            for (var d = 0; d < data.length; d++) {
                data1[d] = [d, data[d].value1];
                ticks[d] = [d, data[d].key];
            }
            var chartdata = [{
                label: "",
                data: data1,
                bars: {
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [{ opacity: 1 }, { opacity: 1 }]
                    },
                    barWidth: 0.3, // in units of the x axis
                    align: "center",
                },
                valueLabels:
                {
                    show: true,
                    labelFormatter: function (v) {
                        return v;
                    },
                    //valign: 'top',
                    align: 'center',
                    font: "8pt '微软雅黑'",
                    useBackground: false,
                    backgroundColor: "white",
                    useBorder: false,
                    fontcolor: '#555',
                    showShadow: false
                }
            }];
            var options = {
                //折线的颜色
                colors: ['#D99694', '#C35754', "#d9aba9", "#9d403e"],
                //是否显示标题
                legend: {
                    show: false,
                },
                grid: {
                    show: true,
                    borderWidth: 0, // in pixels报表外边框
                    // interactive stuff
                    hoverable: false,
                    autoHighlight: false, // highlight in case mouse is near    
                },
                //背景网格
                yaxis: {
                    ticks: 5,
                    tickColor: '#eeeeee',
                },
                xaxis: {
                    ticks: ticks,
                    tickColor: '#ffffff',
                    autoscaleMargin: 0.05,
                },
            }
            plot = $.plot(id, chartdata, options);
        }
    }
    //一柱 一线 2y轴 结合图表，右侧坐标有“%”
    function barlineChart(id, data, container) {
        if (data.length > 0) {
            var data1 = [];
            var data2 = [];
            var ticks = [];
            for (var d = 1, p = 0; d < data.length; d++, p++) {
                data1[p] = [d, data[d].value1];
                data2[p] = [d, data[d].value2];
                ticks[p] = [d, data[d].key];
            }
            var chartdata = [{
                label: data[0].value1,
                data: data1,
                yaxis: 2,//两个y轴
                bars: {
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [{ opacity: 1 }, { opacity: 1 }]
                    },
                    barWidth: 0.3, // in units of the x axis
                    align: "center",
                },
                valueLabels:
                {
                    show: true,
                    labelFormatter: function (v) {
                        return v;
                    },
                    //valign: 'top',
                    align: 'center',
                    font: "8pt '微软雅黑'",
                    useBackground: false,
                    backgroundColor: "white",
                    useBorder: false,
                    fontcolor: '#555',
                    showShadow: false
                }
            }, {
                label: data[0].value2,
                data: data2,
                lines: {
                    show: true,//是否显示折线
                    lineWidth: 3,//折线宽度
                },
                points: {
                    show: true,//是否显示Point
                },
                valueLabels:
                {
                    show: true,
                    labelFormatter: function (v) {
                        return v + "%";
                    },
                    valign: 'top',
                    align: 'left',
                    font: "8pt '微软雅黑'",
                    useBackground: false,
                    backgroundColor: "white",
                    useBorder: false,
                    fontcolor: '#555',
                    showShadow: false
                }
            }];
            var options = {
                //折线的颜色
                colors: bathroomColors,
                //是否显示标题
                legend: {
                    container: container,
                    show: true,
                    noColumns: 2,
                    position: 'nw',
                    //margin: [130, 230],
                    labelBoxBorderColor: null,
                    backgroundOpacity: 0,

                },
                grid: {
                    show: true,
                    borderWidth: 0, // in pixels报表外边框
                    // interactive stuff
                    hoverable: false,
                    autoHighlight: false, // highlight in case mouse is near    
                },
                //背景网格
                yaxis: {
                    ticks: 5,
                    tickColor: '#eeeeee',
                },
                xaxis: {
                    ticks: ticks,
                    tickColor: '#ffffff',
                    autoscaleMargin: 0.05,
                },
                yaxes: [{
                    position: "right",
                    tickFormatter: euroFormatter,
                }],
            }
            plot = $.plot(id, chartdata, options);
        }
    }

    //一柱 一线 2y轴 结合图表，右侧坐标无“%”
    function barlineCharttwo(id, data, container) {
        if (data.length > 0) {
            var data1 = [];
            var data2 = [];
            var ticks = [];
            for (var d = 1, p = 0; d < data.length; d++, p++) {
                data1[p] = [d, data[d].value1];
                data2[p] = [d, data[d].value2];
                ticks[p] = [d, data[d].key];
            }
            var chartdata = [{
                label: data[0].value1,
                data: data1,
                yaxis: 2,//两个y轴
                bars: {
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [{ opacity: 1 }, { opacity: 1 }]
                    },
                    barWidth: 0.3, // in units of the x axis
                    align: "center",
                },
                valueLabels:
                {
                    show: true,
                    labelFormatter: function (v) {
                        return v;
                    },
                    //valign: 'top',
                    align: 'center',
                    font: "8pt '微软雅黑'",
                    useBackground: false,
                    backgroundColor: "white",
                    useBorder: false,
                    fontcolor: '#555',
                    showShadow: false
                }
            }, {
                label: data[0].value2,
                data: data2,
                lines: {
                    show: true,//是否显示折线
                    lineWidth: 3,//折线宽度
                },
                points: {
                    show: true,//是否显示Point
                },
                valueLabels:
                {
                    show: true,
                    labelFormatter: function (v) {
                        return v;
                    },
                    valign: 'top',
                    align: 'left',
                    font: "8pt '微软雅黑'",
                    useBackground: false,
                    backgroundColor: "white",
                    useBorder: false,
                    fontcolor: '#555',
                    showShadow: false
                }
            }];
            var options = {
                //折线的颜色
                colors: bathroomColors,
                //是否显示标题
                legend: {
                    container: container,
                    show: true,
                    noColumns: 2,
                    position: 'nw',
                    //margin: [130, 230],
                    labelBoxBorderColor: null,
                    backgroundOpacity: 0,

                },
                grid: {
                    show: true,
                    borderWidth: 0, // in pixels报表外边框
                    // interactive stuff
                    hoverable: false,
                    autoHighlight: false, // highlight in case mouse is near    
                },
                //背景网格
                yaxis: {
                    ticks: 5,
                    tickColor: '#eeeeee',
                },
                xaxis: {
                    ticks: ticks,
                    tickColor: '#ffffff',
                    autoscaleMargin: 0.05,
                },
                yaxes: [{
                    position: "right",
                }],
            }
            plot = $.plot(id, chartdata, options);
        }
    }

    //一柱 一线 2y轴 结合图表，两侧坐标有“%”
    function barlineChartthree(id, data, container) {
        if (data.length > 0) {
            var data1 = [];
            var data2 = [];
            var ticks = [];
            for (var d = 1, p = 0; d < data.length; d++, p++) {
                data1[p] = [d, data[d].value1];
                data2[p] = [d, data[d].value2];
                ticks[p] = [d, data[d].key];
            }
            var chartdata = [{
                label: data[0].value1,
                data: data1,
                yaxis: 2,//两个y轴
                bars: {
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [{ opacity: 1 }, { opacity: 1 }]
                    },
                    barWidth: 0.3, // in units of the x axis
                    align: "center",
                },
                valueLabels:
                {
                    show: true,
                    labelFormatter: function (v) {
                        return v + "%";
                    },
                    //valign: 'top',
                    align: 'center',
                    font: "8pt '微软雅黑'",
                    useBackground: false,
                    backgroundColor: "white",
                    useBorder: false,
                    fontcolor: '#555',
                    showShadow: false
                }
            }, {
                label: data[0].value2,
                data: data2,
                lines: {
                    show: true,//是否显示折线
                    lineWidth: 3,//折线宽度
                },
                points: {
                    show: true,//是否显示Point
                },
                valueLabels:
                {
                    show: true,
                    labelFormatter: function (v) {
                        return v + "%";
                    },
                    valign: 'top',
                    align: 'left',
                    font: "8pt '微软雅黑'",
                    useBackground: false,
                    backgroundColor: "white",
                    useBorder: false,
                    fontcolor: '#555',
                    showShadow: false
                }
            }];
            var options = {
                //折线的颜色
                colors: bathroomColors,
                //是否显示标题
                legend: {
                    container: container,
                    show: true,
                    noColumns: 2,
                    position: 'nw',
                    //margin: [130, 230],
                    labelBoxBorderColor: null,
                    backgroundOpacity: 0,

                },
                grid: {
                    show: true,
                    borderWidth: 0, // in pixels报表外边框
                    // interactive stuff
                    hoverable: false,
                    autoHighlight: false, // highlight in case mouse is near    
                },
                //背景网格
                yaxis: {
                    ticks: 5,
                    tickColor: '#eeeeee',
                    tickFormatter: euroFormatter,
                },
                xaxis: {
                    ticks: ticks,
                    tickColor: '#ffffff',
                    autoscaleMargin: 0.05,
                },
                yaxes: [{
                    position: "right",
                    tickFormatter: euroFormatter,
                }],
            }
            plot = $.plot(id, chartdata, options);
        }
    }

    //四线一轴图表  线形图
    function lineChart(id, data, container) {
        if (data.length > 0) {
            var data1 = [];
            var data2 = [];
            var data3 = [];
            var data4 = [];
            var ticks = [];
            for (var d = 1, p = 0; d < data.length; d++, p++) {
                data1[p] = [d, data[d].value1];
                data2[p] = [d, data[d].value2];
                data3[p] = [d, data[d].value3];
                data4[p] = [d, data[d].value4];
                ticks[p] = [d, data[d].key];
            }
            var chartdata = [{
                label: data[0].value1,
                data: data1,
            }, {
                label: data[0].value2,
                data: data2,
            }, {
                label: data[0].value3,
                data: data3,
            }, {
                label: data[0].value4,
                data: data4,
            }];
            var options = {
                series: {
                    lines: {
                        show: true,//是否显示折线
                        lineWidth: 3,//折线宽度
                    },
                    points: {
                        show: true
                    },
                    valueLabels:
                    {
                        show: true,
                        valign: 'top',
                        align: 'left',
                        font: "8pt '微软雅黑'",
                        useBackground: false,
                        backgroundColor: "white",
                        useBorder: false,
                        fontcolor: '#555',
                        showShadow: false
                    }
                },
                //折线的颜色
                colors: bathroomColors,
                //是否显示标题
                legend: {
                    container: container,
                    show: true,
                    noColumns: 4,
                    position: 'nw',
                    //margin: [130, 230],
                    labelBoxBorderColor: null,
                    backgroundOpacity: 0,

                },
                grid: {
                    show: true,
                    borderWidth: 0, // in pixels报表外边框
                    // interactive stuff
                    hoverable: false,
                    autoHighlight: false, // highlight in case mouse is near    
                },
                //背景网格
                yaxis: {
                    ticks: 5,
                    tickColor: '#eeeeee',
                },
                xaxis: {
                    ticks: ticks,
                    tickColor: '#ffffff',
                    autoscaleMargin: 0.05,
                }
            }
            plot = $.plot(id, chartdata, options);
        }
    }
    //条形图
    function bartypeChart(id, data) {
        if (data.length > 0) {
            var data1 = [];
            var ticks = [];
            for (var d = 1, p = 0; d < data.length; d++, p++) {
                data1[p] = [data[d].value1, d];
                ticks[p] = [d, data[d].key];
            }
            var chartdata = [{
                label: data[0].value1,
                data: data1,
                bars: {
                    show: true,
                    horizontal: true,
                    fill: true,
                    fillColor: {
                        colors: [{ opacity: 1 }, { opacity: 1 }]
                    },
                    align: "center",
                    barWidth: 0.5
                },
                valueLabels:
                {
                    show: true,
                    //labelFormatter: function (v) {
                    //    return (+v).toFixed(1);
                    //},
                    plotAxis: 'x',
                    valign: 'below',
                    align: 'left',
                    font: "8pt '微软雅黑'",
                    useBackground: false,
                    backgroundColor: "white",
                    useBorder: false,
                    fontcolor: '#555',
                    showShadow: false
                }
            }];
            var options = {
                //折线的颜色
                colors: bathroomColors,
                legend: {
                    show: false
                },

                xaxis: {
                    max: 1000,
                    tickColor: '#eeeeee',

                },
                yaxis: {
                    ticks: ticks,
                    tickColor: '#ffffff',
                },
                grid: {
                    hoverable: false,
                    borderWidth: 0
                }
            }
            plot = $.plot(id, chartdata, options);
        }
    }

    ko.bindingHandlers.customchart = {
        init: function (elem, valueAccessor, allBindings, viewModel, bindingContext) {
            elem.setAttribute("id", viewModel.chartid);
            //viewModel.showchart();
        }

    };
    ko.bindingHandlers.customchart1 = {
        init: function (elem, valueAccessor, allBindings, viewModel, bindingContext) {
            elem.setAttribute("id", viewModel.chartid1);
            viewModel.showchart();
        }

    };


    function viewModel(params) {
        var model = {};

        model.param = params;
        model.data = params.chart;
        model.type = params.chart.type;
        model.description = params.chart.description;
        model.unit = params.chart.unit;
        model.chartid = _CreateGuid();
        model.chartid1 = _CreateGuid();
        model.exportexcel = function ()
        {
             
        }

        model.showchart=function()
        {
            var tabledata = [
                {
                    "key": "",
                    "value1": "存款时点余额",
                    "value2": "较上年增速"
                },
                {
                    "key": "去年末",
                    "value1": 43,
                    "value2": 4.3
                },
                {
                    "key": "1月",
                    "value1": 23,
                    "value2": 2.3
                },
                {
                    "key": "2月",
                    "value1": 45,
                    "value2": 2.7
                },
                {
                    "key": "3月",
                    "value1": 38,
                    "value2": 5.5
                },
                {
                    "key": "4月",
                    "value1": 25,
                    "value2": 3.3
                },
                {
                    "key": "5月",
                    "value1": 55,
                    "value2": 4.7
                }
            ]
            if (model.type == "barline")
                barlineChart('#' + model.chartid, tabledata, '#' + model.chartid1);
            if (model.type == "barline2")
                barlineCharttwo('#' + model.chartid, tabledata, '#' + model.chartid1);
            if (model.type == "barline3")
                barlineChartthree('#' + model.chartid, tabledata, '#' + model.chartid1);
            if (model.type == "bar")
                barChart('#' + model.chartid, tabledata);
            if (model.type == "bartype")
                bartypeChart('#' + model.chartid, tabledata);
            if (model.type == "line")
                lineChart('#' + model.chartid, tabledata, '#' + model.chartid1);
            //var tabledata = _CommunicationHelper.post(model.param.chart.dataurl, {"a":"b"});//model.param.chart.tabledata;
            //var tabledata = [
            //    {
            //        "key": "",
            //        "value1": "存款时点余额",
            //        "value2": "较上年增速"
            //    },
            //    {
            //        "key": "去年末",
            //        "value1": 43,
            //        "value2": 4.3
            //    },
            //    {
            //        "key": "1月",
            //        "value1": 23,
            //        "value2": 2.3
            //    },
            //    {
            //        "key": "2月",
            //        "value1": 45,
            //        "value2": 2.7
            //    },
            //    {
            //        "key": "3月",
            //        "value1": 38,
            //        "value2": 5.5
            //    },
            //    {
            //        "key": "4月",
            //        "value1": 25,
            //        "value2": 3.3
            //    },
            //    {
            //        "key": "5月",
            //        "value1": 55,
            //        "value2": 4.7
            //    }
            //]
            //barlineChart('#' + model.chartid, tabledata, '#' + model.chartid1);
        } 
        model.search = model.param.action.subscribe(function (newValue) {
            if ("search" == newValue) {
                //console.log(model.param.chart.title);
                model.showchart();

            }
        });
          
        model.dispose = function () {
            model.search.dispose();
        }
        
        return model;
    }


   

    return {
        viewModel: viewModel,
        template: htmlStr
    }

});
 