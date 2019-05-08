(function($){
    $(function() {
      $('.menu__icon').on('click', function() {
        $(this).closest('.menu_nav').toggleClass('menu_state_open');
      });
    });
  })(jQuery);