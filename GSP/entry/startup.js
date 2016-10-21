define(['jquery', 'knockout', './router.js'], function ($, ko, router) {

  // Components can be packaged as AMD modules, such as the following:
  ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
  ko.components.register('home-page', { require: 'pages/home/home' });
  ko.components.register('role-page', { require: 'pages/role/main' });
  ko.components.register('manager-page', { require: 'pages/manager/main' });

  // ... or for template-only components, you can just point to a .html file directly:
  ko.components.register('about-page', {
    template: { require: 'text!pages/about/about.html' }
  });
 
  ko.components.register('investment-page', { require: 'components/investment-page/investment-page' }); 





// register Manager page components


//注册公共组件
ko.components.register('page_header', { require: 'Component/frame/header' });
ko.components.register('page_footer', { require: 'Component/frame/bottom' });

//领导日程
ko.components.register('schedule', { require: 'Component/page/home/schedule' });

ko.components.register('area-data1', { require: 'Component/page/home/customer-group-table' });
ko.components.register('area-data2', { require: 'Component/page/home/customer-group-table' });
ko.components.register('team-data1', { require: 'Component/page/home/customer-group-table' });
ko.components.register('team-data2', { require: 'Component/page/home/customer-group-table' });
//核心数据
ko.components.register('core', { require: 'Component/page/home/manager-data' });

//交叉数据
ko.components.register('corss', { require: 'Component/page/home/manager-data' });
ko.components.register('information-link', { require: 'Component/page/home/information-link' });














  // Start the application
  ko.applyBindings({ route: router.currentRoute });
});
