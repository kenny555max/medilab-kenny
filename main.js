$(document).ready(function(){



    $(window).scroll(function(){
        let wScroll = $(this).scrollTop();

        // Top- Dynamic Designs
        if (wScroll > 50) {
            $('header').addClass('submerge2');
            $('.topNav').addClass('submerge');
        }else {
            $('header').removeClass('submerge2');
            $('.topNav').removeClass('submerge');
        }

        if (wScroll > 100) {
            $('.back-to-top').fadeIn('slow');
        }else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.toggle').click(function(){
        $('nav').fadeIn('slow');
        $('ul ul').css('display', 'none');
    });
    $('.cancel').click(function(){
        $('nav').fadeOut('slow');
    })
    $('.dropdown1 > a').click(function(e){
        e.preventDefault();
        $('.down').toggleClass('rotate');
        $(this).next().slideToggle(600);
    });
    $('.dropdown2 > a').click(function(e){
        e.preventDefault();
        $('.left').toggleClass('rotate2');
        $(this).next().slideToggle(600);
    });

    // reset
    $(window).resize(function(){
        if ($(window).width() > 768) {
            $('ul ul').removeAttr('style');
            $('ul ul ul').removeAttr('style');
            $('nav').removeAttr('style');
        }
    })



    // set-bg
    $('.set-bg').each(function(){
        let bg = $(this).data('setbg');
        $(this).css(
            'background-image', 'url(' + bg + ')'
        )
    });

    
    $('.venobox').venobox({

    });

    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });

    $('.datepicker').datepicker({
        autoclose: true
    });


    // scrollto
    $('header a').click(function(){
        $('html, body').animate(
            {
                scrollTop: $($.attr(this, 'href')).offset().top-($(window).height() / 10)
            },
            1500,
            'easeInOutExpo'
        );
    });

    $(window).resize(function(){
        if ($(window).width() <= 768) {
            $('nav a').click(function(){
                $('nav').fadeOut('slow');
            });
        }
    });


    $('.back-to-top').click(function(){
        $('html, body').animate(
            {
                scrollTop: 0
            },
            1500,
            'easeInOutExpo'
        )
    });

    $('.boxes').owlCarousel({
        autoplay: true,
        dots: true,
        nav: false,
        items: 2,
        margin: 0,
        loop: true,
        smartspeed: 1200,
        responsive: {
            0:{
                items: 1,
            },
            500:{
                items: 1,
            },
            768:{
                items: 1,
            },
            1024: {
                items: 2,
            },
            1200: {
                items: 2
            }
        }
    });

    $('.venobox').venobox();

})