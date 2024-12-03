$(document).ready(function () {
  $(window).scroll(function () {
    updateLeft();
    updateRight();
  });

  function updateRight() {
    if ($(window).scrollTop() > 30) {
      $(".sidebar-right").addClass("scrolled");
    } else {
      $(".sidebar-right").removeClass("scrolled");
    }
  }
  function updateLeft() {
    if ($(window).scrollTop() > 30) {
      $(".sidebar-left").addClass("scrolled");
    } else {
      $(".sidebar-left").removeClass("scrolled");
    }
  }

  var owl1 = $(".owl-carousel");
  owl1.owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    loop: true,
    //   margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  var typed = new Typed("#typed", {
    stringsElement: "#typed-strings",
    typeSpeed: 50,
    backSpeed: 10,
    backDelay: 3000,
    fadeOut: false,
    loop: true,
  });
});
