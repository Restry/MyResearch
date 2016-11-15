define(['knockout', 'text!./userinfo.html'], function (ko, template) {

    function UserViewModel(params) {

        var m = {
            user: ko.observable('im not ok '),
            componentLoaded: function () {

                setTimeout(function() {
                    m.user('yep , we are done'); 
                }, 2000);
                
            }
        }

        return m;
    }

    return { viewModel: UserViewModel, template: template };
});
