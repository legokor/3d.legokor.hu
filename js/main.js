$(document).ready(function () {
    changeNavbarStyle();

    $(document).scroll(function () {
       changeNavbarStyle();
    });
    
    function changeNavbarStyle(){
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(document).scrollTop() > $nav.height());
    }

    $(".nav-item").click(function(){
        event.preventDefault();
        
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
        
        var selector = $(this).find(".nav-link").attr("href");
        var topPosition = $(selector).offset().top;
        var offset = $(".navbar").outerHeight();
        
        var body = $("html, body");
        body.stop().animate({ scrollTop: topPosition-offset }, 500, 'swing');

    });

   
    $("#printing input").keyup(function(){
        calculatePrice();
    });

    $("#calculate").click(function(){
        calculatePrice();
    });

    function calculatePrice(){
        var x = parseInt($("#xsize").val());
        var y = parseInt($("#ysize").val());
        var z = parseInt($("#zsize").val());
        
        var magicConstant = 0.003925233;

        var cost = x*y*z*magicConstant;
        console.log(cost);
        if (isNaN(cost)) $("#price").text("Töltsd ki a mezőket!");
        else $("#price").text(cost+" Ft");
    }
});
