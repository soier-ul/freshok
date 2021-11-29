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



  let lastScroll = 0;
  const defaultOffset = 360;
  const header = document.querySelector('.header');

  const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
  const containHide = () => header.classList.contains('hide');

  window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
      header.classList.add('hide');
    } else if (scrollPosition() < lastScroll && containHide()) {
      header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
  })

});