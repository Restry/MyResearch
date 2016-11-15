define(['knockout', 'text!./login.html'], function (ko, template) {

    function LoginViewModel(params) {

        return {
            user: ko.observable('Constructed'),
            componentLoaded: function () {
               debugger;
                if (params.onLoad) {
                    params.onLoad(this);
                }
            }
        }
    }

    return { viewModel: LoginViewModel, template: template };
});
