$(function () {

  $('.hero__inner').slick({
    nextArrow: '<button type="button" class="hero__arrow hero__arrow--next"><svg><use xlink: href = "../images/sprite.svg#icon-arrow-right"></use></svg></button>',
    prevArrow: '<button type="button" class="hero__arrow hero__arrow--prev"><svg><use xlink: href = "../images/sprite.svg#icon-arrow-left"></use></svg></button>'
  });

  $('.brands__inner').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6
  });

  $('.header__catalog').on('click', function () {
    $('.header__catalog').toggleClass('header__catalog--active');
  });

  $(".little-card__star").rateYo({
    starWidth: "16px",
    maxValue: 1,
    numStars: 1,
    rating: 1,
    readOnly: true,
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);  

});