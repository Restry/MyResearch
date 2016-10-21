define([
'text!./chart.html'
], function (htmlStr) {

    //柱状图
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
                colors: ['#D99694', '#C35754', "#d9aba9", "#9d403e"],
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
                    //tickFormatter: euroFormatter,
                }],
            }
            plot = $.plot(id, chartdata, options);
        }
    }

    ko.bindingHandlers.customchart = {
        init: function (elem, valueAccessor, allBindings, viewModel, bindingContext) {
            elem.setAttribute("id", viewModel.chartid);
        }
    };

    ko.bindingHandlers.customchart2 = {
        init: function (elem, valueAccessor, allBindings, viewModel, bindingContext) {
            elem.setAttribute("id", viewModel.chartid2);
            viewModel.showchart();
        }
    };

   

    function viewModel(params) {
        var model = {};
        model.chart = params.chart;
        model.type = params.charttype;
        model.chartid = _CreateGuid();
        model.chartid2 = _CreateGuid();

        if (params.charttype == 'line')
        {
            model.title1 = params.charttype;
        }
        
        model.showchart = function () {
            if (model.type == '001') {
                barChart('#' + model.chartid, model.chart);
            }
            if (model.type == '002')
            {
                barlineChart('#' + model.chartid, model.chart, '#' + model.chartid2);
            }
        }
        
       


        return model;
    }

    return {
        viewModel: viewModel,
        template: htmlStr
    }
})