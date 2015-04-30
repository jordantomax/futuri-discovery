window.user = {}

user.login = function() {
  $('.js-user-logged-in').show();
  $('.js-user-logged-out').hide()
}

user.logout = function() {
  $('.js-user-logged-in').hide();
  $('.js-user-logged-out').show()
}
