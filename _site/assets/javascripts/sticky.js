$(function() {
  if ($('.js-sticky').length) {
    var offset = $('.js-sticky').offset().top
      , scrolledPast = false
      , reloadSticky = function() {
        if ($('.js-sticky')) {
          offset = $('.js-sticky').offset().top;
          scrolledPast = false;

          $('.js-sticky').height($('.js-sticky').height());
          $('.js-sticky').children().css('width', $('.js-sticky').width());
        }
      }

    reloadSticky();

    $(window).on ('scroll', function() {
      if ($(window).scrollTop() > offset){
        if (scrolledPast === false) {
          scrolledPast = true;
          $('.js-sticky').children().addClass('mod-sticky-stuck');
        }
      } else {
        scrolledPast = false;
        $('.js-sticky').children().removeClass('mod-sticky-stuck')
      }
    });

    $(window).on ('resize', function() {
      $('.js-sticky').children().css('width', $('.js-sticky').width());
    });

    $(window).on('reloadSticky', function() {
      reloadSticky();
    });
  }
});
