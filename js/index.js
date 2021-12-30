$(document).ready(function () {
  $('.slicklist').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,

        }
      },
    ]
  });
});

