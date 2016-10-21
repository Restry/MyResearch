define(["knockout", "text!./index.html","toastr","nprogress"], function (ko, homeTemplate,toastr,nprogress) {

    function RoleViewModel(route) {

        this.userinfo = {
            userid: 92888,
            roles: [{
                'institutioncode': '1',
                'institution': '北京市分行',
                'departmentcode': '1001',
                'department': '公司金融部',
                'teamcode': '1001001',
                'team': '1团队',
                'rolecode': '-999',
                'role': '主管',
                'url':'home',
                'home': '/zh-CN/Pages/home/manager.html'
            },
            {
                'institutioncode': '2',
                'institution': '上海市分行',
                'departmentcode': '1001',
                'department': '公司金融部',
                'teamcode': '2001001',
                'team': '2团队',
                'rolecode': '2001001001',
                'role': '主管',
                'url':'home',
                'home': '/zh-CN/Pages/home/manager.html'
            },
            {
                'institutioncode': '2',
                'institution': '上海市分行',
                'departmentcode': '2002',
                'department': '公司行政部',
                'teamcode': '2002003',
                'team': '3团队',
                'url':'about',
                'rolecode': '-999',
                'role': '客户经理',
                'home': '/zh-CN/Pages/home/manager.html'
            }]
        }

        this.fSelect = function () {

            location.href = "/manager.html/#manager"
        }
    }



    RoleViewModel.prototype.dispose = function () {
        
        toastr.info('Disposing RoleViewModel components');                  nprogress.done();

    };

    return { viewModel: RoleViewModel, template: homeTemplate };
});
