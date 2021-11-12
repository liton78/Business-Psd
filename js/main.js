
$(document).ready(function(){
    // back to top button scroll;
    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop();
    
        // back to top button
        if(scrolling > 200){
            $('.back-top-btn').fadeIn();
        }else{
            $('.back-top-btn').fadeOut();
        }

    // navbar fix

    if(scrolling > 50){
        $('nav').addClass('navbar-fixed');
    }else{
        $('nav').removeClass('navbar-fixed');
    }

    });

    // back to top button click
    $('.back-top-btn').on('click',function(){
        $('body,html').animate({
            scrollTop: '0px',

        },2000);
    });

    // gallery manu add class

    $('.gallery-manu li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    // banner slider

    $('.banner-slider').slick({
        dots: true,
        prevArrow: '<i class="fas fa-chevron-left left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right right-arrow"></i>'
    });

    // gallery fiiter with mixitup
    var mixer = mixitup('.gallery-full');

    // gallery popup
    $('.venobox').venobox({
        spinner: 'cube-grid',
        spinColor: '#ffc155',
        bgColor: '#ff0000'
    });

});