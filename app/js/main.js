$(function () {

  $('.product-slider__inner').slick({
    slidesToShow: 4,
    nextArrow: '<button type="button" class="product-slider__arrow product-slider__arrow--next"><svg><use xlink: href = "../images/sprite.svg#icon-chevron"></use></svg></button>',
    prevArrow: '<button type="button" class="product-slider__arrow product-slider__arrow--prev"><svg><use xlink: href = "../images/sprite.svg#icon-chevron"></use></svg></button>',
    infinite: false,
    swipe: false,
    responsive: [{
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          swipe: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
          swipe: true
        }
      },
    ]
  });

  $('.product-page__tab').on('click', function (e) {
    e.preventDefault();
    $('.product-page__tab').removeClass('product-page__tab--active');
    $(this).addClass('product-page__tab--active');

    $('.product-page__content-item').removeClass('product-page__content-item--active');
    $($(this).attr('href')).addClass('product-page__content-item--active');
  });

  $('.product-page__list').slick({
    infinite: false,
    dots: true,
    nextArrow: '<button type="button" class="product-page__arrow product-page__arrow--next"><svg><use xlink: href = "../images/sprite.svg#icon-chevron"></use></svg></button>',
    prevArrow: '<button type="button" class="product-page__arrow product-page__arrow--prev"><svg><use xlink: href = "../images/sprite.svg#icon-chevron"></use></svg></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  });

  $('.product-page__img, .burger-popup').on('click', function () {
    $('.product-page__popup').toggleClass('product-page__popup--active');
  });

  $(".rating").rateYo({
    starWidth: "16px",
    ratedFill: "#ffb800",
    normalFill: "#f6f6f6",
    halfStar: true,
    starSvg: '<svg><use xlink: href="../images/sprite.svg#icon-star"></use></svg>'
  });

  // header hide 
  let lastScroll = 0;
  const defaultOffset = 360;
  const header = document.querySelector('.header');

  const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
  const containHide = () => header.classList.contains('header--hide');

  window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
      header.classList.add('header--hide');
    } else if (scrollPosition() < lastScroll && containHide()) {
      header.classList.remove('header--hide');
    }

    lastScroll = scrollPosition();
  })
  // header hide 

  $('.hero__inner').slick({
    infinite: false,
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
    responsive: [{
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
    $('.header__form').toggleClass('header__form--active');
    $('.mobile-menu').removeClass('mobile-menu--active');
  });

  $('.burger').on('click', function () {
    $('.mobile-menu').toggleClass('mobile-menu--active');
    $('.header__form').removeClass('header__form--active');
  });

  $('.burger--mobile').on('click', function () {
    $('.product-catalog__filters').removeClass('product-catalog__filters--active');
  });

  $(".little-card__star").rateYo({
    starWidth: "16px",
    maxValue: 1,
    numStars: 1,
    rating: 1,
    readOnly: true,
    starSvg: '<svg><use xlink: href="../images/sprite.svg#icon-star"></use></svg>'
  });

  // filter
  $('.filter__btn--category').on('click', function () {
    $('.filter-category').toggleClass('filter-category--active');
  });

  $('.filter__btn--offers').on('click', function () {
    $('.filter-offers').toggleClass('filter-offers--active');
  });

  $('.filter__btn--brands').on('click', function () {
    $('.filter-brands').toggleClass('filter-brands--active');
  });

  $('.filter__btn--price').on('click', function () {
    $('.filter-price ').toggleClass('filter-price--active');
  });

  $('.filter__item').on('click', function () {
    $('.filter__item').toggleClass('filter__item--active');
  });
  // filter

  $('.product-catalog__btn').on('click', function () {
    $('.product-catalog__btn').removeClass('product-catalog__btn--active');
    $(this).addClass('product-catalog__btn--active');
  });

  $('.button-grid').on('click', function () {
    $('.product-card').addClass('product-card--row');
  });

  $('.button-row').on('click', function () {
    $('.product-card').removeClass('product-card--row');
  });

  $('.product-catalog__btn--filter').on('click', function () {
    $('.product-catalog__filters').toggleClass('product-catalog__filters--active');
  });

  $('.product-catalog__select, .product-page__info-input').styler();

  // ion range 
  var $range = $(".filter-price__slider"),
    $inputFrom = $(".filter-price__input--from"),
    $inputTo = $(".filter-price__input--to"),
    instance,
    min = 0,
    max = 1100,
    from = 0,
    to = 0;

  $range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: 100,
    to: 1000,
    onStart: updateInputs,
    onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });
  // ion range 

  // mixitup
  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
  // mixitup

});