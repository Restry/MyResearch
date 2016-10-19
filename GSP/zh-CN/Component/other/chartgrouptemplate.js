/*
图表类型：
bar:柱形图
barline:一柱 一线 2y轴 结合图表，右侧坐标有“%”
barline2:一柱 一线 2y轴 结合图表，右侧坐标无“%”
barline3:一柱 一线 2y轴 结合图表，两侧坐标有“%”
bartype:条形图
orderbar:柱状图分组
line:四线一轴图表  线形图
*/

var _chart1 = {
    title: "公司存款时点余额",
    code:"1",
    type: "barline",
    dataurl: gspsetting.api_baseurl+"api/chartdemo/chartdata",
    tabledata: [{ "key": "北京1", "value1": 53, }, { "key": "上海", "value1": 43, }],
    description: "数据说明",
    unit: "亿元"
}

var _chart2 = {
    title: "公司存款时点新增",
    code: "1",
    type: "barline",
    dataurl: gspsetting.api_baseurl + "api/chartdemo/chartdata",
    tabledata: [{ "key": "北京2", "value1": 53, }, { "key": "上海", "value1": 43, }],
    description: "数据说明",
    unit: "亿元"
}

var _chart3 = {
    title: "公司存款时点新增（较上年）排名前五的分行",
    code: "1",
    type: "bar",
    dataurl: gspsetting.api_baseurl + "api/chartdemo/chartdata",
    tabledata: [{ "key": "北京3", "value1": 53, }, { "key": "上海", "value1": 43, }],
    description: "数据说明",
    unit: "亿元"
}

var _chart4 = {
    title: "公司存款时点新增（较上年）排名后五的分行",
    code: "1",
    type: "bar",
    dataurl: gspsetting.api_baseurl + "api/chartdemo/chartdata",
    tabledata: [{ "key": "北京4", "value1": 53, }, { "key": "上海", "value1": 43, }],
    description: "数据说明",
    unit: "亿元"
}

var _chart5 = {
    title: "公司存款日均余额",
    code: "1",
    type: "barline",
    dataurl: gspsetting.api_baseurl + "api/chartdemo/chartdata",
    tabledata: [{ "key": "北京5", "value1": 53, }, { "key": "上海", "value1": 43, }],
    description: "数据说明",
    unit: "亿元"
}

var _chart6 = {
    title: "公司存款日均新增",
    code: "1",
    type: "barline",
    dataurl: gspsetting.api_baseurl + "api/chartdemo/chartdata",
    tabledata: [{ "key": "北京6", "value1": 53, }, { "key": "上海", "value1": 43, }],
    description: "数据说明",
    unit: "亿元"
}

var _chart7 = {
    title: "公司存款日均完成率",
    code: "2",
    type: "bartype",
    dataurl: gspsetting.api_baseurl + "api/chartdemo/chartdata",
    tabledata: [{ "key": "北京7", "value1": 53, }, { "key": "上海", "value1": 43, }],
    description: "数据说明",
    unit: "亿元"
}

var _chart8 = {
    title: "公司存款日均新增（较上年）排名前五的分行",
    code: "1",
    type: "bar",
    dataurl: gspsetting.api_baseurl + "api/chartdemo/chartdata",
    tabledata: [{ "key": "北京7", "value1": 53, }, { "key": "上海", "value1": 43, }],
    description: "数据说明",
    unit: "亿元"
}

var _chart9 = {
    title: "公司存款日均新增（较上年）排名后五的分行",
    code: "1",
    type: "bar",
    dataurl: gspsetting.api_baseurl + "api/chartdemo/chartdata",
    tabledata: [{ "key": "北京7", "value1": 53, }, { "key": "上海", "value1": 43, }],
    description: "数据说明",
    unit: "亿元"
}

var _chart10 = {
    title: "公司存款日均新增完成率排名前五的分行",
    code: "1",
    type: "barline",
    dataurl: gspsetting.api_baseurl + "api/chartdemo/chartdata",
    tabledata: [{ "key": "北京7", "value1": 53, }, { "key": "上海", "value1": 43, }],
    description: "数据说明",
    unit: "亿元"
}

var _chart11 = {
    title: "公司存款日均新增完成率排名后五的分行",
    code: "1",
    type: "barline",
    dataurl: gspsetting.api_baseurl + "api/chartdemo/chartdata",
    tabledata: [{ "key": "北京7", "value1": 53, }, { "key": "上海", "value1": 43, }],
    description: "数据说明",
    unit: "亿元"
}

var _chart12 = {
    title: "四大行对公存款新增",
    code: "1",
    type: "orderbar",
    dataurl: gspsetting.api_baseurl + "api/chartdemo/chartdata",
    tabledata: [{ "key": "北京7", "value1": 53, }, { "key": "上海", "value1": 43, }],
    description: "数据说明",
    unit: "亿元"
}

var _chart13 = {
    title: "四大行对公存款市场份额",
    code: "1",
    type: "line",
    dataurl: gspsetting.api_baseurl + "api/chartdemo/chartdata",
    tabledata: [{ "key": "北京7", "value1": 53, }, { "key": "上海", "value1": 43, }],
    description: "数据说明",
    unit: "亿元"
}

var _chart14 = {
    title: "付息率",
    code: "3",
    type: "barline3",
    dataurl: gspsetting.api_baseurl + "api/chartdemo/chartdata",
    tabledata: [{ "key": "北京7", "value1": 53, }, { "key": "上海", "value1": 43, }],
    description: "数据说明",
    unit: "亿元"
}

var _chart15 = {
    title: "分行业公司存款时点余额",
    code: "3",
    type: "barline",
    dataurl: gspsetting.api_baseurl + "api/chartdemo/chartdata",
    tabledata: [{ "key": "北京7", "value1": 53, }, { "key": "上海", "value1": 43, }],
    description: "数据说明",
    unit: "亿元"
}

var _chart16 = {
    title: "分行业公司存款时点新增",
    code: "3",
    type: "barline2",
    dataurl: gspsetting.api_baseurl + "api/chartdemo/chartdata",
    tabledata: [{ "key": "北京7", "value1": 53, }, { "key": "上海", "value1": 43, }],
    description: "数据说明",
    unit: "亿元"
}

var _chart17 = {
    title: "分产品公司存款时点余额",
    code: "3",
    type: "barline",
    dataurl: gspsetting.api_baseurl + "api/chartdemo/chartdata",
    tabledata: [{ "key": "北京7", "value1": 53, }, { "key": "上海", "value1": 43, }],
    description: "数据说明",
    unit: "亿元"
}

var _chart18 = {
    title: "分产品公司存款时点新增",
    code: "3",
    type: "barline2",
    dataurl: gspsetting.api_baseurl + "api/chartdemo/chartdata",
    tabledata: [{ "key": "北京7", "value1": 53, }, { "key": "上海", "value1": 43, }],
    description: "数据说明",
    unit: "亿元"
}




var _ChartGroupTemplate = [];

_ChartGroupTemplate["SDcurrency"] =
    {
        title: "时点",
        charts: [_chart1, _chart2, _chart3, _chart4]
    }

_ChartGroupTemplate["002"] =
    {
        title: "时点",
        charts: [_chart1, _chart2]
    }

_ChartGroupTemplate["RJ"] =
    {
        title: "日均",
        charts: [_chart5, _chart6, _chart7, _chart8, _chart9, _chart10, _chart11]
    }

_ChartGroupTemplate["RJOther"] =
    {
        title: "日均",
        charts: [_chart5, _chart6, _chart8, _chart9]
    }

_ChartGroupTemplate["TY"] =
    {
        title: "同业",
        charts: [_chart12, _chart13]
    }

_ChartGroupTemplate["FXL"] =
    {
        title: "付息率",
        charts: [_chart14]
    }

_ChartGroupTemplate["FHY"] =
    {
        title: "分行业",
        charts: [_chart15,_chart16]
    }

_ChartGroupTemplate["FCP"] =
    {
        title: "分产品",
        charts: [_chart17,_chart18]
    }