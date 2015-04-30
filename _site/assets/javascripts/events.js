$(function() {
  $('body').on('click', '.js-new-school', function() {
    renderSchool();
    $(window).trigger('reloadSticky');
  });

  $('body').on('click', '.js-add-school', function() {
    $schoolNumberEl.html(parseInt($schoolNumberEl.html()) + 1)
    $('.js-your-schools-link').addClass('anim-pulse');

    setTimeout(function() {
      $('.js-your-schools-link').removeClass('anim-pulse');
    }, 500);
  });

  $('body').on('click', '.js-notify', function() {
    var html = renderTemplate('notification', {message: $(this).data('message')}, 'body')
      , timeout = setTimeout(function() {
          unRender(html)
        }, 4000);

    $('.js-notify-close').on('click', function() {
      clearTimeout(timeout);
      unRender(html);
    });
  });

  $('body').on('click', '.js-set-remove', function() {
    unRender($(this).closest('.js-set'));
  });

  $('body').on('click', '.js-set-next', function(e) {
    e.preventDefault()

    
    var $thisSet = $('.js-set').filter(function() { return $(this).is(":visible")})
      , $nextSet = $thisSet.next()
      ;

    unRender($thisSet, function() {
      if ($nextSet.data('trigger') && triggerMethods[$nextSet.data('trigger')]) {
        triggerMethods[$nextSet.data('trigger')]();
      }
      $nextSet.fadeIn('fast');
    });
  });

  $('body').on('click', '.js-your-schools li', function() {
    $(this).parent().children().each(function() {
      $(this).removeClass('active')
    })
    $(this).addClass('active');
    renderYourSchoolActive()
    $(window).trigger('reloadSticky');
  });

  $('body').on('click', '.js-school-remove', function() {
    var $school = $(this).closest('.js-your-schools-active').children()
      , index = $school.data('index')
      , $toRemove = $('.js-your-schools').children().filter(function() {
          return $(this).data('index') === index
        })
      , $replacement = $toRemove.prev().length ? $toRemove.prev() : $toRemove.next()
      ;
    $toRemove.remove();
    renderYourSchoolActive($replacement.data('index'));
  });

  $('body').on('click', '.js-trigger-modal', function(e) {
    e.preventDefault();

    $('.js-modal').removeClass('active');

    modal = $(this).data('modal');
    $activeModal = $('.js-modal').filter(function() {
      return $(this).data('modal') == modal
    });
    $activeModal.addClass('active')
  });

  $('body').on('click', '.js-modal-close', function(e) {
    e.preventDefault();

    $('.js-modal').removeClass('active');
  });

  $('body').on('click', '.js-login', function(e) {
    e.preventDefault();

    localStorage.setItem('login', 'true');
    user.login();
  });

  $('body').on('click', '.js-logout', function(e) {
    e.preventDefault();

    localStorage.setItem('login', 'false');
    user.logout();
  });
});

