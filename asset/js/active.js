(function($) {

    function aristrocatic_js() {
        var windowS = $(window),
            windowH = windowS.height(),
            banners = $('.slider-one-img img'),
            BannerCaption = $('.slider-one-content'),
            BannerCaptionH = BannerCaption.height(),
            capationmiddle = ((windowH - BannerCaptionH) / 2);
        BannerCaption.css({
            paddingTop: capationmiddle,
            paddingBottom: capationmiddle
        });
        banners.css('height', windowH);
    }

    if ($.fn.owlCarousel) {
        var sliderone = $(".slider-one-active");
        sliderone.owlCarousel({
            items: 1,
            nav: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplay: false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        sliderone.on('translated.owl.carousel', function(event) {
            event.preventDefault();
            // $('.slider-one-item').addClass('animated zoomInUp').show();
            $('.slider-one-active .owl-item .welcome-text > *').addClass('animated lightSpeedIn').show();
        });

        sliderone.on('translate.owl.carousel', function(event) {
            event.preventDefault();
            // $('.slider-one-item').removeClass('animated zoomInUp').show();
            $('.slider-one-active .owl-item .welcome-text > *').removeClass('animated lightSpeedIn').hide();
        });

        // testimonial slider
        var testimonial = $('.active-premium-slider');
        testimonial.owlCarousel({
            items: 1,
            nav: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplay: true,
        });

        testimonial.on('translated.owl.carousel', function(event) {
            event.preventDefault();
            $(this).find('.owl-item.active .premium-single-testimonial > *').addClass('animated slideInRight').show();
        });

        testimonial.on('translate.owl.carousel', function(event) {
            event.preventDefault();
            $(this).find('.owl-item.active .premium-single-testimonial > *').removeClass('animated slideInRight').hide();
        });

        $('.active-brand-slider').owlCarousel({
            items: 4,
            nav: false,
            autoplay: true,
            margin: 100,
            smartSpeed: 1000,
            loop: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 50
                },
                480: {
                    items: 3,
                    margin: 50
                },
                768:{
                    items: 4
                }

            }

        });

        $('.project-slider').owlCarousel({
            items: 3,
            nav: true,
            autoplay: false,
            margin: 30,
            loop: true,
            smartSpeed: 1000,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                480:{
                    items: 2
                },
                991: {
                    items: 3
                }

            }
        });

        $('.why-choose-slider').owlCarousel({
            items: 3,
            nav: true,
            autoplay: true,
            margin: 30,
            loop: true,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                },
                480:{
                    items: 2
                },
                991: {
                    items: 3
                }

            }
        });

        $('.team-slider').owlCarousel({
            items: 4,
            nav: false,
            autoplay: true,
            margin: 30,
            loop: true,
            smartSpeed: 1000,
            responsive: {
                0 : {
                    items: 1
                },
                480 : {
                    items: 2
                },
                768 : {
                    items: 3,
                },
                991 : {
                    items: 4
                }
            }
        });
    }
    // portfolio section

    // isotop active
    if ($.fn.isotope) {
        $(".isotop-active").isotope({
            filter: '*',
        });

        $('.isotop-nav ul li').on('click', function() {

            $(".isotop-nav ul li").removeClass("current");
            $(this).addClass("current");

            var selector = $(this).attr('data-filter');
            $(".isotop-active").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'easeOutCirc',
                    queue: false,
                }
            });
            return false;
        });
    }

    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 500
        });
    }
    if ($.fn.magnificPopup) {
        $('.video').magnificPopup({ type: 'iframe' });
    }
    if ($.fn.countrySelect) {
        $(".country").countrySelect();
    }
$('#scrollup').on('click',function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
     /*----------------------------
    START - Page loader activation with animation
    ------------------------------ */
    $('#preloader').fadeOut('slow', function() {
        $(this).remove();
    });

    $(window).on('load', function() {
        aristrocatic_js();
    });
    $(window).on('resize', function() {
        aristrocatic_js();
    });


})(jQuery);