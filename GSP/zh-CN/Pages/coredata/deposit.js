'use strict';
var baseUrl = '../../';

requirejs.config({
    baseUrl: baseUrl,
    paths: {
        'text': '../Assets/Scripts/text'
    },
    shim: {
    },
    urlArgs: 'v=1.0.0.2' + new Date()  //开发环境防止缓存。开发环境只是用版本号控制
});

//注册公共组件
ko.components.register('page_header', { require: 'Component/frame/header' });
ko.components.register('page_menu', { require: 'Component/menu/leftmenu' });
ko.components.register('page_footer', { require: 'Component/frame/bottom' });

/*生成图表公共方法*/
var plot = "";
//chart colors
var bathroomColors = ['#D99694', '#C35754', "#d9aba9", "#9d403e"];

function euroFormatter(v, axis) {
    return v.toFixed(axis.tickDecimals) + "%";
}
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
            colors: bathroomColors,
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

//四线一轴图表
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

var city = ["全辖", "北京", "天津", "上海", "重庆", "安徽", "福建", "甘肃", "广东", "深圳"];
var charts = [
          {
              "title": "公司存款时点余额",
              "description": "余额对公贷款=公司存款+单位大额存单+对公表内理财 分行业存款=公司存款+单位大额存单(待定)  公司存款：狭义的公司存款",
              "unit": "亿元",
              "data": [
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
          }, {
              "title": "公司存款时点新增（较上年）排名前五的分行",
              "description": "前五对公贷款=公司存款+单位大额存单+对公表内理财 分行业存款=公司存款+单位大额存单(待定)  公司存款：狭义的公司存款",
              "unit": "亿元",
              "data": [
                
                {
                    "key": "北京",
                    "value1": 53,
                },
                {
                    "key": "上海",
                    "value1": 43,
                },
                {
                    "key": "天津",
                    "value1": 40,
                },
                {
                    "key": "广州",
                    "value1": 38,
                },
                {
                    "key": "深圳",
                    "value1": 25,
                }
              ]
          },
          {
              "title": "公司存款日均完成率",
              "description": "完成率对公贷款=公司存款+单位大额存单+对公表内理财 分行业存款=公司存款+单位大额存单(待定)  公司存款：狭义的公司存款",
              "unit": "亿元",
              "data": [
                {
                    "key": "",
                    "value1": "",
                },
                {
                    "key": "实际完成进度",
                    "value1": 762,
                },
                {
                    "key": "时间进度目标",
                    "value1": 714,
                },
                {
                    "key": "全年目标",
                    "value1": 952,
                }
              ]
          }, {
              "title": "四大行对公存款市场份额",
              "description": "四大行对公存款市场份额对公贷款=公司存款+单位大额存单+对公表内理财 分行业存款=公司存款+单位大额存单(待定)  公司存款：狭义的公司存款",
              "unit": "百分比",
              "data": [
                {
                    "key": "",
                    "value1": "中行",
                    "value2": "工行",
                    "value3": "农行",
                    "value4": "建行"
                },
                {
                    "key": "去年末",
                    "value1": 430,
                    "value2": 403,
                    "value3": 450,
                    "value4": 400
                },
                {
                    "key": "1月",
                    "value1": 230,
                    "value2": 473,
                    "value3": 470,
                    "value4": 390
                },
                {
                    "key": "2月",
                    "value1": 403,
                    "value2": 304,
                    "value3": 480,
                    "value4": 350
                },
                {
                    "key": "3月",
                    "value1": 330,
                    "value2": 303,
                    "value3": 450,
                    "value4": 300
                },
                {
                    "key": "4月",
                    "value1": 437,
                    "value2": 443,
                    "value3": 330,
                    "value4": 430
                },
                {
                    "key": "5月",
                    "value1": 310,
                    "value2": 470,
                    "value3": 400,
                    "value4": 500
                }
              ]
          }
]

//ko绑定数据
define(function () {
    function viewMdoel() {
        var model = {
            optionValues: ko.observableArray(mechanism),//机构绑定
            selectedOptionValue: ko.observable(suremechanism),//设置机构默认选中值
        }
        model.userinfo = _UserInfo.local();
        //用户信息数据绑定
        var mechanism = city;
        var suremechanism = "北京";
        
        

        for (var i = 0; i < charts.length; i++) {
            if (charts[i].title == "公司存款时点余额") {
                var description = charts[i].description;
                var unit = charts[i].unit;
                var table = charts[i].data;
                model.dsppoint1 = ko.observable(description);//数据说明绑定
                model.unitpoint1 = ko.observable(unit);//单位绑定
                model.mytablepoint1 = ko.observableArray(table);//chart值表格绑定

                barlineChart('#deposit-overview-domestic-point1', table, '#point1-legend');
                //var domestic_point1_data = [];
                //var domestic_point1_data1 = [];
                //var domestic_point1_data2 = [];
                //var domestic_point1_tick = [];
                //for (var d = 1, p = 0; d < table.length; d++, p++) {
                //    domestic_point1_tick[p] = [d, table[d].month];
                //    domestic_point1_data1[p] = [d, table[d].value1];
                //    domestic_point1_data2[p] = [d, table[d].value2];
                //}
                //domestic_point1_data = [{
                //    label: table[0].value1,
                //    data: domestic_point1_data1,
                //    yaxis: 2,//两个y轴
                //    bars: {
                //        show: true,
                //        fill: true,
                //        fillColor: {
                //            colors: [{ opacity: 1 }, { opacity: 1 }]
                //        },
                //        barWidth: 0.3, // in units of the x axis
                //        align: "center",
                //    },
                //    valueLabels:
                //    {
                //        show: true,
                //        labelFormatter: function (v) {
                //            return v;
                //        },
                //        //valign: 'top',
                //        align: 'center',
                //        font: "8pt '微软雅黑'",
                //        useBackground: false,
                //        backgroundColor: "white",
                //        useBorder: false,
                //        fontcolor: '#555',
                //        showShadow: false
                //    }
                //}, {
                //    label: table[0].value2,
                //    data: domestic_point1_data2,
                //    lines: {
                //        show: true,//是否显示折线
                //        lineWidth: 3,//折线宽度
                //    },
                //    points: {
                //        show: true,//是否显示Point
                //    },
                //    valueLabels:
                //    {
                //        show: true,
                //        labelFormatter: function (v) {
                //            return v + "%";
                //        },
                //        valign: 'top',
                //        align: 'left',
                //        font: "8pt '微软雅黑'",
                //        useBackground: false,
                //        backgroundColor: "white",
                //        useBorder: false,
                //        fontcolor: '#555',
                //        showShadow: false
                //    }
                //}];
                //var domestic_point1_options = {
                //    //折线的颜色
                //    colors: bathroomColors,
                //    //是否显示标题
                //    legend: {
                //        container: "#point1-legend",
                //        show: true,
                //        noColumns: 2,
                //        position: 'nw',
                //        //margin: [130, 230],
                //        labelBoxBorderColor: null,
                //        backgroundOpacity: 0,

                //    },
                //    grid: {
                //        show: true,
                //        borderWidth: 0, // in pixels报表外边框
                //        // interactive stuff
                //        hoverable: false,
                //        autoHighlight: false, // highlight in case mouse is near    
                //    },
                //    //背景网格
                //    yaxis: {
                //        ticks: 5,
                //        tickColor: '#eeeeee',
                //    },
                //    xaxis: {
                //        ticks: domestic_point1_tick,
                //        tickColor: '#ffffff',
                //        autoscaleMargin: 0.05,
                //    },
                //    yaxes: [{
                //        position: "right",
                //        tickFormatter: euroFormatter,
                //    }],
                //}
                //plot = $.plot("#deposit-overview-domestic-point1", domestic_point1_data, domestic_point1_options);
            }
            else if (charts[i].title == "公司存款时点新增（较上年）排名前五的分行") {
                
                    var description = charts[i].description;
                    var unit = charts[i].unit;
                    var table = charts[i].data;
                    model.dsppoint3 = ko.observable(description);//数据说明绑定
                    model.unitpoint3 = ko.observable(unit);//单位绑定
                //model.mytable = ko.observableArray(table);//chart值表格绑定
                    barChart('#deposit-overview-domestic-point3', table);
                    //var domestic_point1_data = [];
                    //var domestic_point1_data1 = [];
                    //var domestic_point1_tick = [];
                    //for (var d = 1, p = 0; d < table.length; d++, p++) {
                    //    domestic_point1_tick[p] = [d, table[d].month];
                    //    domestic_point1_data1[p] = [d, table[d].value1];
                    //}
                    //domestic_point1_data = [{
                    //    label: table[0].value1,
                    //    data: domestic_point1_data1,
                    //    yaxis: 2,//两个y轴
                    //    bars: {
                    //        show: true,
                    //        fill: true,
                    //        fillColor: {
                    //            colors: [{ opacity: 1 }, { opacity: 1 }]
                    //        },
                    //        barWidth: 0.3, // in units of the x axis
                    //        align: "center",
                    //    },
                    //    valueLabels:
                    //    {
                    //        show: true,
                    //        labelFormatter: function (v) {
                    //            return v;
                    //        },
                    //        //valign: 'top',
                    //        align: 'center',
                    //        font: "8pt '微软雅黑'",
                    //        useBackground: false,
                    //        backgroundColor: "white",
                    //        useBorder: false,
                    //        fontcolor: '#555',
                    //        showShadow: false
                    //    }
                    //}];
                    //var domestic_point1_options = {
                    //    //折线的颜色
                    //    colors: bathroomColors,
                    //    //是否显示标题
                    //    legend: {
                    //        container: "#point3-legend",
                    //        show: true,
                    //        noColumns: 2,
                    //        position: 'nw',
                    //        //margin: [130, 230],
                    //        labelBoxBorderColor: null,
                    //        backgroundOpacity: 0,

                    //    },
                    //    grid: {
                    //        show: true,
                    //        borderWidth: 0, // in pixels报表外边框
                    //        // interactive stuff
                    //        hoverable: false,
                    //        autoHighlight: false, // highlight in case mouse is near    
                    //    },
                    //    //背景网格
                    //    yaxis: {
                    //        ticks: 5,
                    //        tickColor: '#eeeeee',
                    //    },
                    //    xaxis: {
                    //        ticks: domestic_point1_tick,
                    //        tickColor: '#ffffff',
                    //        autoscaleMargin: 0.05,
                    //    },
                    //    yaxes: [{
                    //        position: "right",
                    //        tickFormatter: euroFormatter,
                    //    }],
                    //}
                    //plot = $.plot("#deposit-overview-domestic-point3", domestic_point1_data, domestic_point1_options);
                
            }
            else if (charts[i].title == "公司存款日均完成率") {
                var description = charts[i].description;
                var unit = charts[i].unit;
                var table = charts[i].data;
                model.dspdaliy3 = ko.observable(description);//数据说明绑定
                model.unitdaliy3 = ko.observable(unit);//单位绑定
                //model.mytable = ko.observableArray(table);//chart值表格绑定
                var domestic_point1_data = [];
                var domestic_point1_data1 = [];
                var domestic_point1_tick = [];
                for (var d = 1, p = 0; d < table.length; d++, p++) {
                    domestic_point1_tick[p] = [d,table[d].month];
                    domestic_point1_data1[p] = [table[d].value1,d];
                }
                domestic_point1_data = [{
                    label: table[0].value1,
                    data: domestic_point1_data1,
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
                var domestic_point1_options = {
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
                        ticks: domestic_point1_tick,
                        tickColor: '#ffffff',
                    },
                    grid: {
                        hoverable: false,
                        borderWidth: 0
                    }
                }
                plot = $.plot("#deposit-overview-domestic-daily3", domestic_point1_data, domestic_point1_options);
            }
            else if (charts[i].title == "四大行对公存款市场份额") {
                var description = charts[i].description;
                var unit = charts[i].unit;
                var table = charts[i].data;
                model.dspins2 = ko.observable(description);//数据说明绑定
                model.unitins2 = ko.observable(unit);//单位绑定
                model.mytableins2 = ko.observableArray(table);//chart值表格绑定

                lineChart('#deposit-overview-domestic-industry2', table, '#industry2-legend')
                //var domestic_point1_data = [];
                //var domestic_point1_data1 = [];
                //var domestic_point1_data2 = [];
                //var domestic_point1_data3 = [];
                //var domestic_point1_data4 = [];
                //var domestic_point1_tick = [];
                //for (var d = 1, p = 0; d < table.length; d++, p++) {
                //    domestic_point1_tick[p] = [d, table[d].month];
                //    domestic_point1_data1[p] = [d, table[d].value1];
                //    domestic_point1_data2[p] = [d, table[d].value2];
                //    domestic_point1_data3[p] = [d, table[d].value3];
                //    domestic_point1_data4[p] = [d, table[d].value4];
                //}
                //domestic_point1_data = [{
                //    label: table[0].value1,
                //    data: domestic_point1_data1,                              
                //}, {
                //    label: table[0].value2,
                //    data: domestic_point1_data2,                    
                //}, {
                //    label: table[0].value3,
                //    data: domestic_point1_data3,
                //}, {
                //    label: table[0].value4,
                //    data: domestic_point1_data4,
                //}];
                //var domestic_point1_options = {
                //    series: {
                //        lines: {
                //            show: true,//是否显示折线
                //            lineWidth: 3,//折线宽度
                //        },
                //        points: {
                //            show:true
                //        },
                //        valueLabels:
                //        {
                //            show: true,                            
                //            valign: 'top',
                //            align: 'left',
                //            font: "8pt '微软雅黑'",
                //            useBackground: false,
                //            backgroundColor: "white",
                //            useBorder: false,
                //            fontcolor: '#555',
                //            showShadow: false
                //        }
                //    },
                //    //折线的颜色
                //    colors: bathroomColors,
                //    //是否显示标题
                //    legend: {
                //        container: "#industry2-legend",
                //        show: true,
                //        noColumns: 4,
                //        position: 'nw',
                //        //margin: [130, 230],
                //        labelBoxBorderColor: null,
                //        backgroundOpacity: 0,

                //    },
                //    grid: {
                //        show: true,
                //        borderWidth: 0, // in pixels报表外边框
                //        // interactive stuff
                //        hoverable: false,
                //        autoHighlight: false, // highlight in case mouse is near    
                //    },
                //    //背景网格
                //    yaxis: {
                //        ticks: 5,
                //        tickColor: '#eeeeee',
                //    },
                //    xaxis: {
                //        ticks: domestic_point1_tick,
                //        tickColor: '#ffffff',
                //        autoscaleMargin: 0.05,
                //    },
                //}
                //plot = $.plot("#deposit-overview-domestic-industry2", domestic_point1_data, domestic_point1_options);
            }
        }
        


        plot.resize();
        return model;
    }

    ko.applyBindings(new viewMdoel());
})








