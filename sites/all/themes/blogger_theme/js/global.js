(function ($) {
  "use strict";
  $(document).ready(function () {
    // Main menu superfish
    $('#main-menu > ul').superfish({
      delay: 200,
      animation: {opacity: 'show', height: 'show'},
      speed: 'fast',
      cssArrows: false,
      disableHI: true
    });

    // Mobile Menu
    $('#navigation-toggle').sidr({
      name: 'sidr-main',
      source: '#sidr-close, #site-navigation',
      side: 'left',
      displace: false
    });
    $(".sidr-class-toggle-sidr-close").click(function () {
      $.sidr('close', 'sidr-main');
      return false;
    });

    wow = new WOW(
            {
              animateClass: 'animated',
              offset: 100
            }
    );
    wow.init();
  }); // End doc ready
})(jQuery);