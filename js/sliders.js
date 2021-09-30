$(document).ready(function () {
    $('.slider-number-one').slick({
        arrows: false,
        dots: false,
        infinite: false,
        slidesToShow: 3,
        draggable:true,
        slidesToScroll:1,
            responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: true,
                draggable:true,

            }
        },
                {
                    breakpoint: 851,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: true,
                        draggable:true,

                    }
                }

    ]
    })

});

$(document).ready(function () {
    $('.second-slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        autoplay:true,
        autoplaySpeed: 10000,
        speed:2000,
        fade: true,
        waitForAnimate: false,
        slidesToShow: 1,
        draggable:true,
        slidesToScroll:1,
        easing:'ease',
    })

});

$(document).ready(function () {
    $('.mentors-background').slick({
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 1,
        draggable:true,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed: 10000,
    })

});




