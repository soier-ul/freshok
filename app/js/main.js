$(function () {

  $('.hero__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="hero__arrow hero__arrow--next"><svg><use xlink: href = "../images/sprite.svg#icon-arrow-right"></use></svg></button>',
    prevArrow: '<button type="button" class="hero__arrow hero__arrow--prev"><svg><use xlink: href = "../images/sprite.svg#icon-arrow-left"></use></svg></button>',
    responsive: [{
      breakpoint: 1576,
      settings: {
        dots: true,
        arrows: false
      }
    }]
  });

  $('.brands__inner').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
      breakpoint: 993,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
  });

  $('.header__catalog').on('click', function () {
    $('.header__catalog').toggleClass('header__catalog--active');
  });

  $('.search-btn').on('click', function () {
    $('.form-mobile').toggleClass('form-mobile--active');
  });

  $('.burger').on('click', function () {
    $('.mobile-menu').toggleClass('mobile-menu--active');
    $('.form-mobile').removeClass('form-mobile--active');
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