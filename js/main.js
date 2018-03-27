// слайдер в футере

    $(document).ready(function(){
      $('.b-slide').slick({
            slidesToShow: 4,
            autoplay: false,
            autoplaySpeed: 2000,
            centerMode: false,
            prevArrow:'<a class="b-arrow b-arrow--footer-left" href="javascript:void(0)" title=""></a>',
            nextArrow:'<a class="b-arrow b-arrow--footer-right" href="javascript:void(0)" title=""></a>'
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