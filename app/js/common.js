var debugTimes = false;

/**
 * Global Variables
 */

/**
 * Document Ready
 */
$(document).ready(function () {
    if ($(window).width() >= 768) {
        var prevScroll = window.pageYOffset;
        $(window).on('scroll', function (event) {
            var currentScroll = window.pageYOffset;
            var delta = currentScroll - prevScroll;
            var $header = $('.header');

            if (delta < 0) {
                if (currentScroll <= 0) {
                    $header.removeClass('is-fixed is-hide is-show');
                    setTimeout(function () {
                        $header.addClass('is-transition');
                    }, 0);
                }
                if ($header.is('.is-fixed')) {
                    $header.removeClass('is-hide').addClass('is-show');
                }
            } else if (delta > 0) {
                if ($header.is('.is-fixed')) {
                    $header.removeClass('is-show').addClass('is-hide');
                } else {
                    if (currentScroll > $header.outerHeight()) {
                        $header.css('transition', 'none').addClass('is-fixed is-hide');
                        setTimeout(function () {
                            $header.css('transition', '');
                        }, 0);
                    }
                }
            }

            prevScroll = currentScroll;
        });
    }


    $('.js-burg').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            $(this).siblings('.js-menu').removeClass('active')
            $(this).siblings('.header__logo').addClass('is-color')
        } else {
            $(this).addClass('active')
            $(this).siblings('.js-menu').addClass('active')
            $(this).siblings('.header__logo').addClass('is-color')
        }
    })

    $(".js-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
        if ($(window).width() <= 768) {
            $(".js-menu").removeClass('active')
            $('.js-burg').removeClass('active')
        }
    });
});