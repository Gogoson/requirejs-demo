define(function (require) {

    var $ = require("jquery");
    require("easing");

    $(".container .desc_box").each(function (i) {
        var obj = $(".container .desc_box");
        var length = obj.length;
        var width = obj.width();
        var j = length - i;
        $(this).delay((i + 1) * 900).animate({
            "top": "50px",
            "opacity": 1
        }, 1000, "easeInOutElastic", function () {
            $(this).addClass("rotate");
            $(this).animate({
                "left": (j - 1) * 250
            }, j * 600, "easeOutCubic", function () {
                $(this).removeClass("rotate");
                //鼠标经过效果
                $(this).on("mouseover", function () {
                    $(this).addClass("rotate");
                    $(this).stop().animate({
                        "top": '10px'
                    }, 300, "easeInOutCubic");
                });
                $(this).on("mouseout", function () {
                    $(this).removeClass("rotate");
                    $(this).stop().animate({
                        "top": '50px'
                    }, 800, "easeOutElastic");
                });
            });
        });
    });


});
