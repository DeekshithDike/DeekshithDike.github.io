

/*-------------------------------------------------------------------
 [Table Of Content]

 1. Fix Header Navbar and change logo

 -------------------------------------------------------------------*/

/*===================================
 On  Scroll Fix Header
 ======================================*/

$(document).on('scroll',function(){
    var scroll = $(window).scrollTop();
    if(scroll>2)
    {
        $(".headerLogo").attr('src','assets/images/logo.png');
        $(".navbar").addClass('navbar-fixed-top');
        $("#TopBtn").fadeIn();
    }else
    {
        $(".headerLogo").attr('src','assets/images/logo-white.png');
        $(".navbar").removeClass('navbar-fixed-top');
        $("#TopBtn").fadeOut();
    }
});


