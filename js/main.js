// Loadding
$(document).ready(function ($) {
    $(window).on('load', function () {
        $(".loader").fadeOut();
    });
});
$('.loader').ready().fadeOut('slow');

$(document).ready(function ($) {
    $(".mainMenuMobile .hasArrow").click(function () {
        $(this).find(".arrow").toggleClass("active");
        $(this).find(".sub-menu").toggleClass("active");
    });
});

$(document).ready(function ($) {
    $('.mobile-toggle').click(function () {
        $('.mainMenuMobile-wrapper').toggleClass('active');
        $(this).toggleClass('active');
    });
});

$(document).ready(function ($) {
    $(".home-slider .imageSlide .text").hover(function () {
        $('.home-slider .image').css("filter", "blur(0px)");
    }, function () {
        $('.home-slider .image').css("filter", "blur(3px)");
    });
});

$(document).ready(function ($) {
    $(".fullWidthBanner .imageSlide .text").hover(function () {
        $('.fullWidthBanner .image').css("filter", "blur(0px)");
    }, function () {
        $('.fullWidthBanner .image').css("filter", "blur(3px)");
    });
});

$(function ($) {
    // Check the initial Poistion of the Sticky Header
    var stickyHeaderPCTop = $('.menuPC').offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > stickyHeaderPCTop) {
            $('.menuPC').addClass("stickyMenuPC");
        } else {
            $('.menuPC').removeClass("stickyMenuPC");
        }
    });
});

// Scroll down PC menu custom
$(function ($) {
    // Check the initial Poistion of the Sticky Header
    var stickyHeaderPCTop = $('.home-slider .image').height();
    $(window).scroll(function () {
        if ($(window).scrollTop() > stickyHeaderPCTop) {
            $('.home .menuPC').addClass("stickyMenuPC");
        } else {
            $('.home .menuPC').removeClass("stickyMenuPC");
        }
    });
});


// // click to move to a div mobile menu
// $(document).ready(function ($) {
//     $(".mobile-toggle").click(function () {
//         $('html,body').animate({
//             scrollTop: $("body").offset().top
//         },
//             '');
//     });
// });

// click to move to div 
// $(".video_sub_text").click(function () {
//     $('html,body').animate({
//         scrollTop: $(".videohead p").offset().top
//     },
//         'slow');
// });

// $(document).ready(function ($) {
//     alert($('.home-slider .image').height());
// });

// Scroll down mobile menu custom
$(function ($) {
    // Check the initial Poistion of the Sticky Header
    var stickyHeaderTop = $('.menuMobile').offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > stickyHeaderTop) {
            $('.menuMobile').addClass("stickyMenuMobile");
        } else {
            $('.menuMobile').removeClass("stickyMenuMobile");
        }
    });
});

// Scroll down mobile menu toggle button custom
$(function ($) {
    // Check the initial Poistion of the Sticky Header
    var stickyHeaderTop = $('.mobile-toggle').offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > stickyHeaderTop) {
            $('.mobile-toggle').addClass("stickyMobile-toggle");
        } else {
            $('.mobile-toggle').removeClass("stickyMobile-toggle");
        }
    });
});


$(document).ready(function ($) {
    if ($('#back-to-top').length) {
        var scrollTrigger = 300,
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
});


// Ve chung toi features
$(document).ready(function ($) {
    $('.vechungtoi .vechungtoi_container .row').slick({
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        focusOnSelect: true,
        cssEase: 'ease-in-out',
        speed: 800,
        draggable: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                draggable: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                draggable: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        ]
    });
});

// Slide Home features
$(document).ready(function ($) {
    $('.features .container .row').slick({
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        focusOnSelect: true,
        cssEase: 'ease-in-out',
        speed: 800,
        draggable: false,
        prevArrow: '<span class="arrowSlide left-arrowSlide icon-vitravel-arrow-left"></span>',
        nextArrow: '<span class="arrowSlide right-arrowSlide icon-vitravel-arrow-right"></span>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                draggable: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                draggable: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        ]
    });
});

// Slide Tour noi bat
$(document).ready(function ($) {
    $('.tour-noibat .tourSlide .wrap').slick({
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        focusOnSelect: true,
        cssEase: 'ease-in-out',
        speed: 800,
        draggable: false,
        prevArrow: '<span class="arrowSlide2 left-arrowSlide icon-vitravel-arrow-left"></span>',
        nextArrow: '<span class="arrowSlide2 right-arrowSlide icon-vitravel-arrow-right"></span>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                draggable: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                draggable: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        ]
    });
});

// Full width home banner
$(document).ready(function ($) {
    $('.home-slider .imageSlide').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        cssEase: 'ease-in-out',
        draggable: false,
        speed: 1000,
        prevArrow: '<span class="arrowSlide left-arrowSlide icon-vitravel-arrow-left"></span>',
        nextArrow: '<span class="arrowSlide right-arrowSlide icon-vitravel-arrow-right"></span>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                draggable: true,
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                draggable: true,
                dots: true,
                slidesToShow: 1,
                arrows: false,
            }
        },
        ]
    });
});


// Full width home banner
$(document).ready(function ($) {
    $('.fullWidthBanner .imageSlide').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        cssEase: 'ease-in-out',
        speed: 800,
        draggable: false,
        prevArrow: '<span class="arrowSlide left-arrowSlide icon-vitravel-arrow-left"></span>',
        nextArrow: '<span class="arrowSlide right-arrowSlide icon-vitravel-arrow-right"></span>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                draggable: true,
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                draggable: true,
                dots: true,
                slidesToShow: 1,
                arrows: false,
            }
        },
        ]
    });
});

// Y kien khach hang
$(document).ready(function ($) {
    $('.ykien-khachhang .ykien-section').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        cssEase: 'ease-in-out',
        speed: 800,
        draggable: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                draggable: true,
                slidesToShow: 1,
            }
        },]
    });
});

// Partner
$(document).ready(function ($) {
    $('.partner .partner-section').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 7,
        slidesToScroll: 6,
        arrows: false,
        dots: false,
        cssEase: 'ease-in-out',
        speed: 1800,
        draggable: true,
        centerMode: false,
        prevArrow: '<span class="arrowSlide left-arrowSlide icon-vitravel-arrow-left"></span>',
        nextArrow: '<span class="arrowSlide right-arrowSlide icon-vitravel-arrow-right"></span>',
        responsive: [{
            breakpoint: 1600,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
                draggable: true,
                speed: 1700,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
                draggable: true,
                speed: 1200,
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 2,
                speed: 800,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 800,
            }
        },
        ]
    });
});

// Full width home banner
$(document).ready(function ($) {
    $('.fullWidthBanner-chitiettour .imageSlide').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        cssEase: 'ease-in-out',
        speed: 800,
        draggable: false,
        prevArrow: '<span class="arrowSlide left-arrowSlide icon-vitravel-arrow-left"></span>',
        nextArrow: '<span class="arrowSlide right-arrowSlide icon-vitravel-arrow-right"></span>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                draggable: true,
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                draggable: true,
                dots: true,
                slidesToShow: 1,
                arrows: false,
            }
        },
        ]
    });
});

// Datepicker
// $(function ($) {
//     $('#datepicker').datepicker({
//         autoHide: true,
//         zIndex: 2048,
//         format: 'dd-mm-yyyy'
//     });
// });

$(function ($) {
    // Check the initial Poistion of the Sticky Header
    var stickyHeaderPCTop = $('.menuPC').offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > stickyHeaderPCTop) {
            $('.nonehtml-alert').addClass("nonehtml-alert-scroll");
        } else {
            $('.nonehtml-alert').removeClass("nonehtml-alert-scroll");
        }
    });
});

$("img.lazy").lazyload();

// click Dia chi toi Map
$(document).ready(function ($) {
    var mapOffset = $("#map").offset().top;
    $(".branches-wrapper .branch").click(function () {
        $('html,body').animate({
            scrollTop: mapOffset
        }, 'slow');
    });
});

// click dat ve
$(document).ready(function ($) {
    var mapOffset = $(".sidebar-datve").offset().top;
    $(".thongtin-tour_row .dattour").click(function () {
        $('html,body').animate({
            scrollTop: mapOffset
        }, 'slow');
    });
});

// Slide info box
$(document).ready(function () {
    $('.slide-info-box .header').click(function () {
        $(this) // the current a-element that was clicked
            .closest('.slide-info-box') // .slide-info-box
            .find('.content') // find .content inside .slide-info-box
            .stop() // stop animation
            .slideToggle(300); // Slide toggle
    }); // end click

}); // end ready

$('.slide-info-box .header').click(function () {
    $(this).toggleClass("active");
});

function fader() {
    setInterval(function () {
        $(".fullWidthBanner-chitiettour .text").fadeToggle(400);
    }, 6000);
}
setTimeout(fader, 5000);

// Footer images
$(document).ready(function () {
    $('.image-footer').fancybox({

        closeBtn: true,
        arrows: false,
        nextClick: true,

        helpers: {
            thumbs: {
                width: 50,
                height: 50
            }
        }
    });
});
