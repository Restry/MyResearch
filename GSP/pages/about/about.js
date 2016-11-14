define(["knockout", "text!./about.html", "toastr", "nprogress"], function (ko, aboutTemplate, toastr, nprogress) {

    function addHtmlToList(str) {
        $('.list-group').append('<a href="/#" class="list-group-item">' + str + ':' + (new Date).toLocaleString() + '</a>');
    }

    function aboutViewModel(route) {
        debugger;
        console.log('list-group length:' + $('.list-group').length)


        setTimeout(function () {
            clearInterval(invID)
        }, 5000)

        var invID = setInterval(function () {
            addHtmlToList('Restry speak');
        }, 1000)

        var model = {
            title:"AAAAAAAAAAAAAAAA",
            selects: [{ title: 0 }, { title: 1 }, { title: 2 }, { title: 3 }, { title: 4 }, { title: 5 }],
            mmsel: [{ title: 0 }, { title: 1 }, { title: 2 }, { title: 3 }, { title: 4 }, { title: 5 }]
        }
        return model;
    }

    aboutViewModel.prototype.dispose = function () {
        nprogress.done();

        toastr.info('.jumbotron length is :' + $('.list-group').length);
    };

    return {
        viewModel: {
            createViewModel: function (params, componentInfo) {
                //试过这个吗？
                //$(componentInfo.element).hide();
                

                return new aboutViewModel(params);
            }
        }, template: aboutTemplate
    };
});
