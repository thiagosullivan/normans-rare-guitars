//Scroll reveal animations

new WOW().init();

//Scroll activated background change
$(function() {
      $(document).scroll(function() {
            var $nav = $(".nav");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
});

//Toggle MENU

var t1 = new TimelineMax({paused: true});
t1.to(".menu", 0.5, {
      left: "0%",
      ease: Power2.easeInOut
});

t1.reverse();
$(document).on("click", ".menu-open", function() {
      t1.reversed(!t1.reversed());
});
$(document).on("click", ".menu-close", function() {
      t1.reversed(!t1.reversed());
});