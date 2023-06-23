$(function () {
    $('.mainSlide').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
    });


    $('.goods_tab_tit li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();

        $('.goods_tab_cont .goods_tab_box').eq(idx).addClass('on').siblings().removeClass('on');
    });



    $('.goods_tab_cont .goods_tab_box>ul').slick({
        slidesToShow: 4,
        arrows: false,
    })
    $('.banner').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
    });

});