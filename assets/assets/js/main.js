console.log = function(){};
$(function () {
    "use strict";
    $(window).on("load", function (event) {
        $(".preloader").delay(500).fadeOut(500);
    });
    $(window).on("scroll", function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
        } else {
            $(".header_navbar").addClass("sticky");
        }
    });
    var scrollLink = $(".page-scroll");
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top - 73;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass("active");
                $(this).parent().siblings().removeClass("active");
            }
        });
    });
    $(".navbar-nav a").on("click", function () {
        $(".navbar-collapse").removeClass("show");
    });
    $(".navbar-toggler").on("click", function () {
        $(this).toggleClass("active");
    });
    $(".navbar-nav a").on("click", function () {
        $(".navbar-toggler").removeClass("active");
    });
    if ($(".progress_line").length) {
        $(".progress_line").appear(
            function () {
                var el = $(this);
                var percent = el.data("width");
                $(el).css("width", percent + "%");
            },
            { accY: 0 }
        );
    }
    $(".counter").counterUp({ delay: 10, time: 1600 });
    $(window).on("scroll", function (event) {
        if ($(this).scrollTop() > 600) {
            $(".back-to-top").fadeIn(200);
        } else {
            $(".back-to-top").fadeOut(200);
        }
    });
    $(".back-to-top").on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 1500);
    });
    $(".project_active").slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<span class="prev"><i class="lni lni-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="lni lni-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
    });
    $(".testimonial_active").slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 2 } },
            { breakpoint: 992, settings: { slidesToShow: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
    });
    var wow = new WOW({ boxClass: "wow", mobile: false });
    wow.init();

//testimonial slider


});

gsap.to(".bubble--container", 20, {
    rotation: 360,
    transformOrigin: "left 50%",
    repeat: -1,
    ease: "none"
  });
  
  var quotes = [
    '"Thank you so much for all of your help with everything!',
    '"Hands down the best support I have ever received."',
    '"The best service I have ever received!"',
    '"We could not have done it without you!"',
    '"Beyond grateful for the service I received!"',
    '"A wonderful experience all around!"'
  ];
  
  var previousInt = 0;
  
  function animateOut() {
    gsap.fromTo(".text", 2, { opacity: 1 }, { opacity: 0 });
  }
  
  function animateIn() {
    gsap.fromTo(".text", 2, { opacity: 0 }, { opacity: 1 });
  }
  
  // returns a random integer for the quote randomizer
  function getRandomInt() {
    return Math.floor(Math.random() * quotes.length);
  }
  
  function handleAnimation() {
    var randomInt = getRandomInt();
  
    // prevents the new quote from being the same as the previous quote
    while (randomInt == previousInt) {
      randomInt = getRandomInt();
    }
  
    previousInt = randomInt;
  
    // fades the animation out after a second
    setTimeout(() => {
      animateOut();
    }, 1000);
  
    // changes the text of the quote after 2.8 seconds
    setTimeout(() => {
      document.querySelector(".text").innerHTML = quotes[randomInt];
    }, 2800);
  
    // fades the quote back in after 3 seconds
    setTimeout(() => {
      animateIn();
    }, 3000);
  }
  
  // changes the quote every 7 seconds
  setInterval(handleAnimation, 7000);
  