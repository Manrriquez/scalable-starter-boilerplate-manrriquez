console.clear(),
  
$(".slider-simples").slick({
    dots: true,
    speed: 2000,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
});


$(".slider-mobile-two").slick({
  mobileFirst: true, 
  dots: false,
  arrows: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
        breakpoint: 3000,
        settings: "unslick"
    },
    {
        breakpoint: 2000,
        settings: "unslick"
    },
    {
        breakpoint: 1600,
        settings: "unslick"
    },
    {
        breakpoint: 1024,
        settings: "unslick"
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 377,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 277,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

(function () {
    var menu = document.getElementById('mainNav');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) menu.classList.add('menuFixo');
        else menu.classList.remove('menuFixo');
    });
  })();