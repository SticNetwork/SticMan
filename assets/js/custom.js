(function ($) {
    //preloader js
    //¸ü¶àÄ£°å£ºHttP://www.bootstrapmb.com
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    })


    //Header
    var fixed_top = $("header");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            fixed_top.addClass("header--fixed animated fadeInDown");
        } else {
            fixed_top.removeClass("header--fixed animated fadeInDown");
        }
    });


    /*==== Multipage header Section Start here =====*/
    $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
    // drop down menu width overflow problem fix
    $('ul').parent('li').on('hover', function () {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
            var newpos = -$(menu).width();
            menu.css({
                left: newpos
            });
        }
    });
    $('.menu li a').on('click', function (e) {
        var element = $(this).parent('li');
        if (parseInt($(window).width()) < 992) {
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(300, "swing");
            } else {
                element.addClass('open');
                element.children('ul').slideDown(300, "swing");
                element.siblings('li').children('ul').slideUp(300, "swing");
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(300, "swing");
            }
        }
    });

    $('.header-bar').on('click', function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    })

    $('.menu li').on('click', function (e) {
        if (parseInt($(window).width()) < 992) {
            if (!$(this).hasClass("menu-item-has-children")) {
                $('.header-bar').removeClass('active');
                $('.menu').removeClass('active');
            }
        }
    });
    /*==== Multipage header Section End here =====*/


    //Animation on Scroll initializing
    AOS.init();

    // lightcase initializing
    $('a[data-rel^=lightcase]').lightcase();

    //counter initialized
    new PureCounter();




    //banner slider

    var swiper = new Swiper(".banner__thumb-slider-1", {
        direction: "vertical",
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        slidesPerView: 2,
        autoplay: {
            delay: 1,
        },
        speed: 3000,
    });


    // banner slider 2
    var swiper = new Swiper(".banner__thumb-slider-2", {
        direction: "vertical",
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        slidesPerView: 3,
        autoplay: {
            delay: 1,
            reverseDirection: true,
        },
        speed: 4000,
    });



    // banner slider 3
    var swiper = new Swiper(".banner__thumb-slider-3", {
        direction: "vertical",
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        slidesPerView: 2,
        autoplay: {
            delay: 1,
        },
        speed: 3000,
    });




    //collection slider

    var swiper = new Swiper(".collection__slider1", {
        spaceBetween: 24,
        grabCursor: true,
        loop: true,
        slidesPerView: 3,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
        },
        autoplay: {
            delay: 1,
        },
        speed: 3000,
    });


    // collection slider 2
    var swiper = new Swiper(".collection__slider2", {
        spaceBetween: 24,
        grabCursor: true,
        loop: true,
        slidesPerView: 3,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
        },
        autoplay: {
            delay: 1,
            reverseDirection: true,
        },
        speed: 4000,
    });


    //collection slider -home2

    var swiper = new Swiper(".collection__slider1--home2", {
        spaceBetween: 0,
        grabCursor: true,
        loop: true,
        slidesPerView: 3,
        breakpoints: {
            576: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 5,
            },

            992: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 7,
            },
        },
        autoplay: {
            delay: 1,
        },
        speed: 3000,
    });


    // collection slider 2 - home2
    var swiper = new Swiper(".collection__slider2--home2", {
        spaceBetween: 0,
        grabCursor: true,
        loop: true,
        slidesPerView: 3,
        breakpoints: {
            576: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 5,
            },

            992: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 7,
            },
        },
        autoplay: {
            delay: 1,
            reverseDirection: true,
        },
        speed: 3000,
    });




    //Countdown js initialization
    document.addEventListener('readystatechange', event => {
        if (event.target.readyState === "complete") {
            var clockdiv = document.getElementsByClassName("countdown");
            var countDownDate = new Array();
            for (var i = 0; i < clockdiv.length; i++) {
                countDownDate[i] = new Array();
                countDownDate[i]['el'] = clockdiv[i];
                countDownDate[i]['time'] = new Date(clockdiv[i].getAttribute('data-date')).getTime();
                countDownDate[i]['days'] = 0;
                countDownDate[i]['hours'] = 0;
                countDownDate[i]['seconds'] = 0;
                countDownDate[i]['minutes'] = 0;
            }

            var countdownfunction = setInterval(function () {
                for (var i = 0; i < countDownDate.length; i++) {
                    var now = new Date().getTime();
                    var distance = countDownDate[i]['time'] - now;
                    countDownDate[i]['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
                    countDownDate[i]['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    countDownDate[i]['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    countDownDate[i]['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);

                    if (distance < 0) {
                        countDownDate[i]['el'].querySelector('.countdown__number-days').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.countdown__number-hours').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.countdown__number-minutes').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.countdown__number-seconds').innerHTML = 0;
                    } else {
                        countDownDate[i]['el'].querySelector('.countdown__number-days').innerHTML = countDownDate[i]['days'];
                        countDownDate[i]['el'].querySelector('.countdown__number-hours').innerHTML = countDownDate[i]['hours'];
                        countDownDate[i]['el'].querySelector('.countdown__number-minutes').innerHTML = countDownDate[i]['minutes'];
                        countDownDate[i]['el'].querySelector('.countdown__number-seconds').innerHTML = countDownDate[i]['seconds'];
                    }
                }
            }, 1000);
        }
    });



    //contact form js
    $(function () {
        // Get the form.
        var form = $('#contact-form');
        // Get the messages div.
        var formMessages = $('.form-message');
        // Set up an event listener for the contact form.
        $(form).submit(function (e) {
            // Stop the browser from submitting the form.
            e.preventDefault();
            // Serialize the form data.
            var formData = $(form).serialize();
            // Submit the form using AJAX.
            $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: formData
                })
                .done(function (response) {
                    // Make sure that the formMessages div has the 'success' class.
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');
                    // Set the message text.
                    $(formMessages).text(response);
                    // Clear the form.
                    $('#contact-form input, #contact-form textarea').val('');
                })
                .fail(function (data) {
                    // Make sure that the formMessages div has the 'problem' class.
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('problem');
                    // Set the message text.
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });
        });
    });


})(jQuery);