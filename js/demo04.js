define(function (require) {
    var $ = require("jquery");

    var obtn = $(".demo04 .toTop");
    var odoc = $('html,body');
    var owin = $(window);
    owin.on("scroll", function () {
        owin.scrollTop() > 600 ? obtn.css("display", "block") : obtn.css("display", "none");
    });
    obtn.on("click", function () {
        odoc.animate({
            scrollTop: 0
        }, 300);
    });
});
