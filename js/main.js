$(document).ready(function () {
    'use strict';
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        lazyLoad: true,
        margin: 10,
        stagePadding: 5,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                loop: true
            },
            445: {
                items: 2,
                loop: true
            },
            768: {
                items: 2,
                loop: true
            },
            992: {
                items: 3,
                loop: true
            }
        }
    });

    // =================================

    $(".my-rating").starRating({
        starSize: 15,
        callback: function (currentRating, $el) {
            // make a server call here
        }
    });
});