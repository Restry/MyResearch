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



define(function () {
    var Product = function () {
        var self = this;
        self.phoneNumber = ko.observable().extend({
            required: {
                params: true,
                message: "请填写电话号码"
            },
            pattern: { params: /^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/, message: "请填写正确电话" },
        });

        self.phone = ko.observable().extend({

            required: {
                params: true,
                message: "请填写手机号"
            },
            pattern: { params: /^1[34578]\d{9}$/, message: "手机号需为1~34578开头的11位" },
            //判断输入必须为数字
            number: {
                params: true,
                message: "电话不合法",
            },

        });

        self.eHR = ko.observable().extend({
            required: {
                params: true,
                message: "请填写e-HR号"
            },


        });

        self.notes = ko.observable().extend({
            required: {
                params: true,
                message: "请填写Notes地址"
            }
        });

        self.address = ko.observable().extend({
            required: {
                params: true,
                message: "请填写address"
            }
        });

        self.availableCountries = ko.observableArray([
            { countryName: "UK", countryPopulation: 1 },
            { countryName: "US", countryPopulation: 2 },
            { countryName: "CHS", countryPopulation: 3 }
        ]);
        self.choseSelect = ko.observable("1");//选中的项，它会监视前台进行onchange的变化


        self.like = ko.observableArray([
             { itemName: 'Music', itemValue: '1' },
             { itemName: 'IT', itemValue: '2' },
             { itemName: 'Sport', itemValue: '3' }
        ]),
        self.chosenlikes = ko.observableArray(["1", "3"])
      
    }

    var prduct = new Product();
    ko.applyBindings(prduct);


})


