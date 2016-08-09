/*
 ***************************demo01 begin  20160105**********************
 */
$(function() {
    $(".desc .desc_box").each(function(i) {
        var obj = $(".desc .desc_box");
        var length = obj.length;
        var width = obj.width();
        var j = length - i;
        $(this).delay((i + 1) * 900).animate({
            "top": "50px",
            "opacity": 1
        }, 1000, "easeInOutElastic", function() {
            $(this).addClass("rotate");
            $(this).animate({
                "left": (j - 1) * 250
            }, j * 600, "easeOutCubic", function() {
                $(this).removeClass("rotate");
                //鼠标经过效果
                $(this).on("mouseover", function() {
                    $(this).addClass("rotate");
                    $(this).stop().animate({
                        "top": '10px'
                    }, 300, "easeInOutCubic");
                });
                $(this).on("mouseout", function() {
                    $(this).removeClass("rotate");
                    $(this).stop().animate({
                        "top": '50px'
                    }, 800, "easeOutElastic");
                });
            });
        });
    });
});
/*
 ***************************demo01 end 20160105  *********************
 */

/*
 ***************************demo04 begin 20160224 *********************
//使用原生JavaScript编写返回到顶部功能
window.onload = function() {
    var obtn = document.getElementById("demo04-btn");
    window.onscroll = function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        scrollTop > 800 ? obtn.style.display = "block" : obtn.style.display = "none";
    };
    obtn.onclick = function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var time = setInterval(function() {
            scrollTop -= Math.ceil(scrollTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop;
            scrollTop == 0 ? clearInterval(time) : "";
        }, 30);
    };
};
*/
//使用jquery编写返回到顶部功能
$(function() {
    var obtn = $(".demo04 .toTop");
    var odoc = $('html,body');
    var owin = $(window);
    owin.on("scroll", function() {
        owin.scrollTop() > 600 ? obtn.css("display", "block") : obtn.css("display", "none");
    });
    obtn.on("click", function() {
        odoc.animate({
            scrollTop: 0
        }, 300);
    });
});
/*
 ***************************demo04 end 20160224 *********************
 */
