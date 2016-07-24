require("../css/global.css");

$("#app").html(require("../components/home-center/home-center.js"))


require(["knockout"], function() {

    var singleViewModel = function(params) {
        // Data: value is either null, 'like', or 'dislike'
        this.chosenValue = params.value;

        // Behaviors
        this.like = function() {
            this.chosenValue('like');
        }.bind(this);
        this.dislike = function() {
            this.chosenValue('dislike');
        }.bind(this);
    }

    ko.components.register('like-widget', {
        viewModel: singleViewModel,
        template: require("../components/binding-context1/ct1.html")
    });


    ko.components.register('like-or-dislike',  require("../components/binding-context2/ct2"));

    //CT1

    // Temporarily redirect ko.applyBindings to scope it to this live example
    var realKoApplyBindings1 = ko.applyBindings;
    ko.applyBindings = function() {
        if (arguments.length === 1)
            return ko.applyBindings(arguments[0], document.getElementById('component-inline'));
        return realKoApplyBindings1.apply(ko, arguments);
    }

    /*<![CDATA[*/
    function Product(name, rating) {
        this.name = name;
        this.userRating = ko.observable(rating || null);
    }

    function MyViewModel1() {
        this.products1 = [
            new Product('Garlic bread'),
            new Product('Pain au chocolat'),
            new Product('Seagull spaghetti', 'like') // This one was already 'liked'
        ];
    }

    ko.applyBindings(new MyViewModel1());
    /*]]>*/

    ko.applyBindings = realKoApplyBindings1;




    //CT2

    // Temporarily redirect ko.applyBindings to scope it to this live example
    var realKoApplyBindings2 = ko.applyBindings;
    ko.applyBindings = function() {
        if (arguments.length === 1)
            return ko.applyBindings(arguments[0], document.getElementById('component-amd'));
        return realKoApplyBindings2.apply(ko, arguments);
    }

    /*<![CDATA[*/
    function Product(name, rating) {
        this.name = name;
        this.userRating = ko.observable(rating || null);
    }

    function MyViewModel2() {
        this.products2 = ko.observableArray(); // Start empty
    }

    MyViewModel2.prototype.addProduct = function() {
        var name = 'Product ' + (this.products2().length + 1);
        this.products2.push(new Product(name));
    };

    ko.applyBindings(new MyViewModel2());
    /*]]>*/

    ko.applyBindings = realKoApplyBindings2;

})