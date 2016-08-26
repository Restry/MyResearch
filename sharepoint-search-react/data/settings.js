const settings = [ {
        key: "report",
        title:"数据统计参数", 
        keys:[
                {
                    key:"ClickCount",
                    value:100,
                    title: "点击量统计",
                    note:"默认值“100”次，允许修改",
                    description:"点击量超过设置的数值，将会在柜员端出现“高频”标识"
                },
                {
                    key:"EvaluateCount",
                    value:100,
                    title: "评价低于分数值",
                    note:"默认值“50分”，允许修改",
                    description:"评价低于设置的分值，将被统计在《评价低于一定分数的问题回复》的报表中"
                },
                {
                    key:"topDegree",
                    value:100,
                    title: "TOP次数",
                    note:"默认值“50分”，允许修改",
                    description:"评价低于设置的分值，将被统计在《评价低于一定分数的问题回复》的报表中"
                },
                {
                    key:"topDateScope",
                    value:100,
                    title: "TOP时间区间",
                    note:"默认值“50分”，允许修改",
                    description:"评价低于设置的分值，将被统计在《评价低于一定分数的问题回复》的报表中"
                },
                {
                    key:"highDegree",
                    value:100,
                    title: "高频次数",
                    note:"默认值“50分”，允许修改",
                    description:"评价低于设置的分值，将被统计在《评价低于一定分数的问题回复》的报表中"
                }
        ]
    },
    {
        key:"holiday",
        title:"数据统计参数", 
        keys:[
                {
                    key:"ClickCount",
                    value:100,
                    title: "点击量统计",
                    note:"默认值“100”次，允许修改",
                    description:"点击量超过设置的数值，将会在柜员端出现“高频”标识"
                }
        ]
    }
]

export default settings;
