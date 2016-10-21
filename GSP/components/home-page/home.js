define(["knockout", "text!./home.html", "entry/search-model"], function (ko, homeTemplate, searchModel) {

  function HomeViewModel(route) {
    this.search = searchModel;
  }

  HomeViewModel.prototype.dispose = function () {


    alert('Disposing Home components');
  };

  return { viewModel: HomeViewModel, template: homeTemplate };
});
