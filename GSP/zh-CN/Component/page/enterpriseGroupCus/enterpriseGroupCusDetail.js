define(['text!./enterpriseGroupCusDetail.html'], function (htmlStr) {
    //viewModel构造函数
    function EnterpriseGroupCusDetail(params) {
        var self = this;
        //对view暴露的属性
        this.id = ko.observable();
        this.name = ko.observable();
        this.memberLink = ko.observable();
        this.depositBalance = ko.observable();
        this.companyLoanBalance = ko.observable();
        this.loanBalance = ko.observable();
        this.creditBalance = ko.observable();
        this.availableCreditTotal = ko.observable();
        this.customerLevel = ko.observable();
        this.leadBankInstitution = ko.observable();
        this.leadBankManager = ko.observable();

        //刷新viewModel获取数据
        this.refresh = function () {
            self.getCusByID(params.groupID());
        }
        this.getCusByID = function (groupID) {
            $.ajax({
                type: 'get',
                url: gspsetting.api_baseurl + 'api/GroupCustomerManagement/' + groupID,
                data: {},
                success: function (data) {
                    //Todo：明天和路确定viewModel字段含义
                    self.id(data.ID);
                    self.name(data.Name);
                    self.memberLink(data.MemberLink);
                    self.depositBalance(data.DepositBalance);
                    self.companyLoanBalance(data.CompanyLoanBalance);
                    self.loanBalance(data.LoanBalance);
                    self.creditBalance(data.CreditBalance);
                    self.availableCreditTotal(data.AvailableCreditTotal);
                    self.customerLevel(data.CustomerLevel);
                    self.leadBankInstitution(data.LeadBankInstitution);
                    self.leadBankManager(data.LeadBankManager);
                },
                error: function () { alert("错误"); }
            });
        }
        //创建viewModel的时候顺便刷新
        this.refresh();
    }

    return {
        viewModel: EnterpriseGroupCusDetail,
        template: htmlStr
    }
});