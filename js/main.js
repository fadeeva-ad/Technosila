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

(function($){
  jQuery.fn.lightTabs = function(options){
    var createTabs = function(){
      tabs = this;
      i = 0;
    showPage = function(i){
        $(tabs).children(".b-tab-content").children(".b-tab-content__item").hide();
        $(tabs).children(".b-tab-content").children(".b-tab-content__item").eq(i).show();
        $(tabs).children(".b-main-tab__menu").children(".b-main-tab__item").removeClass("active");
        $(tabs).children(".b-main-tab__menu").children(".b-main-tab__item").eq(i).addClass("active");
    }
    showPage(0);
      $(tabs).children(".b-main-tab__menu").children(".b-main-tab__item").each(function(index, element){
        $(element).attr("data-page", i);
        i++;
      });

      $(tabs).children(".b-main-tab__menu").children(".b-main-tab__item").click(function(){
        showPage(parseInt($(this).attr("data-page")));
        });
      };
        return this.each(createTabs);
    };
})(jQuery);
$(document).ready(function(){
    $(".b-main-tab").lightTabs();
});

