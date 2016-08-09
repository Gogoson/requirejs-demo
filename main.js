requirejs.config({
    baseUrl: "lib",
    paths: {
        jquery: "jquery-1.12.1.min",
        easing: "jquery.easing.1.3",
        js: "../js"
    }

});


requirejs(["js/demo01", "js/demo04"]);
