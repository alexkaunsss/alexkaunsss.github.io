$(document).ready(function(){
  $('.feature-sliders').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    easing: 'ease',
    responsive: [
    
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 2
      }
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        easing: 'ease',
        slidesToScroll: 1
      }
    },

    {
      breakpoint: 490,
      settings: {
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        easing: 'ease',
        autoplaySpeed: 2000,
        slidesToScroll: 1
      }
    }
    ]

  });
  $('.advice-common').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4500,
    waitForAnimate: false,
    easing: 'ease',
    infinite: false

  });

});