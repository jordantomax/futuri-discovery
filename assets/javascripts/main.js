---
---
$(function() {
  var scrolled = false
    , $titles = $('.js-sticky-title')
    , $wrapped = $titles.wrap('<div class="js-sticky-title-wrap"></div>').parent()
    , $activeTitle
    , offset = 0
    ;
  $wrapped.each(function() {
    $(this).css('height', $(this).children().children().outerHeight(true));
  })

  $(window).on('scroll', function() {
    scrolled = true
  });

  setInterval(function() {
    if (scrolled) {
      doSomething()
      scrolled = false
    }
  }, 100);

  var doSomething = function() {
    offset = $(window).scrollTop()

    for (var i = 0; i < $wrapped.length; i++) {
      var titleOffset = $($wrapped.get(i)).offset().top;
      if (titleOffset <= offset + 20) {
        $activeTitle = $($wrapped.get(i));
      } else if (i == 0) {
        $activeTitle = false;
      } else {
        break;
      }
    }
    if ($activeTitle) {
      if (!$activeTitle.hasClass('active')) {
        $wrapped.removeClass('active')
        $activeTitle.addClass('active')
        console.log($activeTitle);
      }
    } else {
        $wrapped.removeClass('active')
    }
  }
});
