$(function() {
    $(window).scroll(function(){
        if($(this).scrollTop() > 60) {
            $(".header").addClass("scroll");
            $(".detail").click(function(){
                $(".header").addClass("click");
            });
        } else {
            $(".header").removeClass("scroll click");
            $(".detail").click(function(){
                $(".header").removeClass("click");
            });
        }
        $(".header").removeClass("click");
    });
});

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 800) {
            $(".sp-menu").css("visibility","hidden");
        } else {
            $(".sp-menu").css("visibility","visible");
        }
    });
});

$(function(){
    $("#select_1").click(function(){
        $(this).parent().addClass("active");
        $("#select_2").parent().removeClass("active");
        $(".location").css("width","270px");
        $(".checkin,.checkout,.person").css("display","block");
        $(".date").css("display","none");
    });
});

$(function(){
    $("#select_2").click(function(){
        $(this).parent().addClass("active");
        $("#select_1").parent().removeClass("active");
        $(".date").css("display","block");
        $(".location").css("width","410px");
        $(".checkin,.checkout,.person").css("display","none");
    });
});

$(function () {
    $("#btn").click(function () {
        $(".menu").toggleClass("click");
    });
});

