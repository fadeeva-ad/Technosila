// слайдер в футере

$(document).ready(function(){
  $('.b-slide').slick({
        slidesToShow: 4,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: false,
        prevArrow:'<a class="b-arrow b-arrow__tv-left" href="javascript:void(0)" title=""></a>',
        nextArrow:'<a class="b-arrow b-arrow__tv-right" href="javascript:void(0)" title=""></a>'
  });
});

$(document).ready(function(){
  $('.b-products__wrapper').slick({
        slidesToShow: 4,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: false,
        prevArrow:'<a class="b-arrow b-arrow__product-left" href="javascript:void(0)" title=""></a>',
        nextArrow:'<a class="b-arrow b-arrow__product-right" href="javascript:void(0)" title=""></a>'
  });
});
$(document).ready(function(){
  $('.b-brands__wrapper').slick({
        slidesToShow: 6,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: false,
        prevArrow:'<a class="b-arrow b-arrow__brand-right" href="javascript:void(0)" title=""></a>',
        nextArrow:'<a class="b-arrow b-arrow__brand-left" href="javascript:void(0)" title=""></a>'
  });
});

$(document).ready(function(){
  $('.b-mainslider').slick({
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        centerMode: false,
        prevArrow:'<a class="b-mainslider-arrow b-mainslider-arrow__left" href="javascript:void(0)" title=""></a>',
        nextArrow:'<a class="b-mainslider-arrow b-mainslider-arrow__right" href="javascript:void(0)" title=""></a>'
  });
});


// слайдер в хедере


    // $(document).ready(function(){
    //   $('.b-slide-hrad').slick({
    //         slidesToShow: 4,
    //         autoplay: false,
    //         autoplaySpeed: 2000,
    //         centerMode: false,
    //         prevArrow:'<a class="b-viewed__arrow right-header" href="javascript:void(0)" title=""></a>',
    //         nextArrow:'<a class="b-viewed__arrow b-viewed__arrow--right" href="javascript:void(0)" title=""></a>'
    //   });
    // });