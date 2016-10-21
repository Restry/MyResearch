var _MenuInfo = {};

_MenuInfo.rolemenu = function (rolecode) {
    //请求菜单
    var menus = _CommunicationHelper.get(gspsetting.api_baseurl + '/api/zh-cn/Menu/' + rolecode);
    Storages.localStorage.set("rolemenu", menus.data);
};


_MenuInfo.menulist = {
    '1': { url: '#.html', title: "首页" },
    '101': { url: '../../Pages/home/manager.html', title: "管理员首页",type:"mainpage" },
    '102': { url: '#.html', title: "客户经理首页", type: "mainpage" },
    '103': { url: '../../Pages/home/sam.html', title: "一般首页", type: "mainpage" },

    '2': { url: '#.html', title: "核心数据", type: "subpage" },
    '201': { url: '../coredata/deposit2.html', title: "存款", type: "subpage" },
    '202': { url: '#.html', title: "贷款", type: "subpage" },
    '203': { url: '#.html', title: "非利息收入", type: "subpage" },
    '204': { url: '#.html', title: "资产质量", type: "subpage" },

    '3': { url: '#.html', title: "数据导入", type: "subpage" },
    '301': { url: '#.html', title: "导入", type: "subpage" },
    '302': { url: '#.html', title: "查询", type: "subpage" },

    '4': { url: '../../Pages/groupCustomerManagement/groupCustomerList.html', title: "集团客户列表", type: "subpage" },
    '401': { url: '../../Pages/single/memberlist.html', title: "集团成员", type: "subpage" },

    '5': { url: '#.html', title: "集团客户汇总数据", type: "subpage" },
    '6': { url: '#.html', title: "客户历史数据查询", type: "subpage" },
    '7': { url: '#.html', title: "客户额度数据查询", type: "subpage" },

    '8': { url: '#.html', title: "企业数据", type: "subpage" },
    '801': { url: '#.html', title: "成员企业数据", type: "subpage" },

    '9': { url: '#.html', title: "集团成员维护", type: "subpage" },
    '901': { url: '#.html', title: "集团成员列表及成员关系维护", type: "subpage" },
    '902': { url: '#.html', title: "单一集团客户-成员关系图谱", type: "subpage" },
    '903': { url: '#.html', title: "客户经理通讯录(账户行)", type: "subpage" },

    '10': { url: '#.html', title: "客户营销", type: "subpage" },
    '1001': { url: '#.html', title: "资金流转分析", type: "subpage" },
    '1002': { url: '#.html', title: "业务数据分析", type: "subpage" },
    '1003': { url: '#.html', title: "我行所占客户业务份额", type: "subpage" },

    '11': { url: '#.html', title: "风险管理", type: "subpage" },
    '1101': { url: '#.html', title: "不良贷款成员客户", type: "subpage" },
    '1102': { url: '#.html', title: "关注成员客户", type: "subpage" },
    '1103': { url: '#.html', title: "未按期偿还贷款提醒", type: "subpage" },
    '1104': { url: '#.html', title: "贷款十三级分类调整提醒", type: "subpage" },

    '12': { url: '#.html', title: "基本信息", type: "subpage" },
    '1201': { url: '#.html', title: "集团客户基本信息", type: "subpage" },

    '13': { url: '#.html', title: "工作", type: "subpage" },
    '1301': { url: '#.html', title: "领导日程", type: "subpage" },
    '1302': { url: '#.html', title: "待阅列表", type: "subpage" },
    '1303': { url: '#.html', title: "待办列表", type: "subpage" },
    '1304': { url: '#.html', title: "预警列表", type: "subpage" },
    '1305': { url: '#.html', title: "公告", type: "subpage" },

    '14': { url: '#.html', title: "机构用户管理", type: "subpage" },
    '1401': { url: '#.html', title: "机构管理", type: "subpage" },
    '1402': { url: '#.html', title: "部门管理", type: "subpage" },
    '1403': { url: '#.html', title: "团队管理", type: "subpage" },
    '1404': { url: '#.html', title: "用户管理", type: "subpage" },
    '1405': { url: '#.html', title: "角色管理", type: "subpage" },

    '15': { url: '#.html', title: "集团客户管理", type: "subpage" },
    '1501': { url: '#.html', title: "集团客户分层打标", type: "subpage" },
    '1502': { url: '#.html', title: "集团客户指定总行团队", type: "subpage" },
    '1503': { url: '#.html', title: "指定联系/参与行客户经理", type: "subpage" },

    '16': { url: '#.html', title: "维护日志查询", type: "subpage" },
    '1601': { url: '#.html', title: "维护日志查询", type: "subpage" },

    '17': { url: '#.html', title: "运维管理", type: "subpage" },
    '1701': { url: '#.html', title: "运维报表", type: "subpage" },

    '97': { url: 'logon/index.html', title: "信息补录检测" },
    '98': { url: '../../Pages/logon/roles.html', title: "角色选择" },
    '99': { url: '../../Pages/Check/verification.html', title: "信息补录" }




};

_MenuInfo.local = function () {
    var menus = null;
    if (Storages.localStorage.get("rolemenu")) {
        menus = Storages.localStorage.get("rolemenu");
    };
    return menus;
};

_MenuInfo.GenerateUrl = function(p_menucode)
{
    var t_menuitem = _MenuInfo.menulist[p_menucode];
    if (t_menuitem.type == null) {
        return t_menuitem.url;
    } else if (t_menuitem.type == "subpage") {
        return "../Do/subpage.html?menucode=" + p_menucode;
    } else if (t_menuitem.type == "mainpage") {
        return "../Do/mainpage.html?menucode=" + p_menucode;
    } else if (t_menuitem.type == "freepage") {
        return "../Do/freepage.html?menucode=" + p_menucode;
    } else {
        return null;
    }
}




