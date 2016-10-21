define(['text!./information-link.html'], function (htmlStr) {

    function viewModel(params) {
        document.getElementById('outsystem').onchange = function () {
            window.location.href = document.getElementById('outsystem').value;
        };
    }

    return {
        viewModel: viewModel,
        template: htmlStr
    }
});