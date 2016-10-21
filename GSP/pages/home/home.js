define(["knockout", "text!./home.html", "entry/search-model", "toastr", "nprogress"], function (ko, homeTemplate, searchModel, toastr, nprogress) {

  function HomeViewModel(route) {
    this.search = searchModel;
  }

  HomeViewModel.prototype.dispose = function () {

    nprogress.done();

    toastr.info('Disposing Home components');
  };

  return { viewModel: HomeViewModel, template: homeTemplate };
});
