$(document).ready(function(e){e(window).on("load",function(){e(".loader").fadeOut()})}),$(document).ready(function(e){e(".mainMenuMobile .hasArrow").click(function(){e(this).find(".arrow").toggleClass("active"),e(this).find(".sub-menu").toggleClass("active")})}),$(document).ready(function(e){e(".mobile-toggle").click(function(){e(".mainMenuMobile-wrapper").toggleClass("active"),e(this).toggleClass("active")})}),$(document).ready(function(e){e(".home-slider .imageSlide .text").hover(function(){e(".home-slider .image").css("filter","blur(0px)")},function(){e(".home-slider .image").css("filter","blur(3px)")})}),$(document).ready(function(e){e(".fullWidthBanner .imageSlide .text").hover(function(){e(".fullWidthBanner .image").css("filter","blur(0px)")},function(){e(".fullWidthBanner .image").css("filter","blur(3px)")})}),$(function(e){var o=e(".home-slider .image").height();e(window).scroll(function(){e(window).scrollTop()>o?e(".menuPC").addClass("stickyMenuPC"):e(".menuPC").removeClass("stickyMenuPC")})}),$(function(e){var o=e(".menuMobile").offset().top;e(window).scroll(function(){e(window).scrollTop()>o?e(".menuMobile").addClass("stickyMenuMobile"):e(".menuMobile").removeClass("stickyMenuMobile")})}),$(function(e){var o=e(".mobile-toggle").offset().top;e(window).scroll(function(){e(window).scrollTop()>o?e(".mobile-toggle").addClass("stickyMobile-toggle"):e(".mobile-toggle").removeClass("stickyMobile-toggle")})}),$(document).ready(function(o){if(o("#back-to-top").length){var e=function(){300<o(window).scrollTop()?o("#back-to-top").addClass("show"):o("#back-to-top").removeClass("show")};e(),o(window).on("scroll",function(){e()}),o("#back-to-top").on("click",function(e){e.preventDefault(),o("html,body").animate({scrollTop:0},700)})}}),$(document).ready(function(e){e(".features .container .row").slick({autoplay:!0,autoplaySpeed:3500,slidesToShow:3,slidesToScroll:1,arrows:!0,dots:!1,focusOnSelect:!0,cssEase:"ease-in-out",speed:800,draggable:!1,prevArrow:'<span class="arrowSlide left-arrowSlide icon-vitravel-arrow-left"></span>',nextArrow:'<span class="arrowSlide right-arrowSlide icon-vitravel-arrow-right"></span>',responsive:[{breakpoint:1200,settings:{draggable:!0,slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{draggable:!0,slidesToShow:1,slidesToScroll:1}}]})}),$(document).ready(function(e){e(".tour-noibat .tourSlide .wrap").slick({autoplay:!0,autoplaySpeed:3500,slidesToShow:3,slidesToScroll:1,arrows:!0,dots:!1,focusOnSelect:!0,cssEase:"ease-in-out",speed:800,draggable:!1,prevArrow:'<span class="arrowSlide2 left-arrowSlide icon-vitravel-arrow-left"></span>',nextArrow:'<span class="arrowSlide2 right-arrowSlide icon-vitravel-arrow-right"></span>',responsive:[{breakpoint:1200,settings:{slidesToShow:3,draggable:!0}},{breakpoint:768,settings:{draggable:!0,slidesToShow:1,slidesToScroll:1}}]})}),$(document).ready(function(e){e(".home-slider .imageSlide").slick({autoplay:!0,autoplaySpeed:8e3,slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!1,pauseOnHover:!1,cssEase:"ease-in-out",draggable:!1,speed:1e3,prevArrow:'<span class="arrowSlide left-arrowSlide icon-vitravel-arrow-left"></span>',nextArrow:'<span class="arrowSlide right-arrowSlide icon-vitravel-arrow-right"></span>',responsive:[{breakpoint:1200,settings:{draggable:!0,slidesToShow:1}},{breakpoint:768,settings:{draggable:!0,dots:!0,slidesToShow:1,arrows:!1}}]})}),$(document).ready(function(e){e(".fullWidthBanner .imageSlide").slick({autoplay:!0,autoplaySpeed:8e3,slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!1,cssEase:"ease-in-out",speed:800,draggable:!1,prevArrow:'<span class="arrowSlide left-arrowSlide icon-vitravel-arrow-left"></span>',nextArrow:'<span class="arrowSlide right-arrowSlide icon-vitravel-arrow-right"></span>',responsive:[{breakpoint:1200,settings:{draggable:!0,slidesToShow:1}},{breakpoint:768,settings:{draggable:!0,dots:!0,slidesToShow:1,arrows:!1}}]})}),$(document).ready(function(e){e(".ykien-khachhang .ykien-section").slick({autoplay:!0,autoplaySpeed:4e3,slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,cssEase:"ease-in-out",speed:800,draggable:!1,responsive:[{breakpoint:992,settings:{draggable:!0,slidesToShow:1}}]})}),$(document).ready(function(e){e(".partner .partner-section").slick({autoplay:!0,autoplaySpeed:3e3,slidesToShow:7,slidesToScroll:1,arrows:!1,dots:!1,cssEase:"ease-in-out",speed:800,draggable:!0,centerMode:!1,prevArrow:'<span class="arrowSlide left-arrowSlide icon-vitravel-arrow-left"></span>',nextArrow:'<span class="arrowSlide right-arrowSlide icon-vitravel-arrow-right"></span>',responsive:[{breakpoint:1600,settings:{slidesToShow:5,draggable:!0}},{breakpoint:1200,settings:{slidesToShow:5,draggable:!0}},{breakpoint:992,settings:{arrows:!0,slidesToShow:3}},{breakpoint:768,settings:{arrows:!0,centerMode:!1,slidesToShow:1}}]})}),$(function(e){var o=e(".menuPC").offset().top;e(window).scroll(function(){e(window).scrollTop()>o?e(".nonehtml-alert").addClass("nonehtml-alert-scroll"):e(".nonehtml-alert").removeClass("nonehtml-alert-scroll")})});