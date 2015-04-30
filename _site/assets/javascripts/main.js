window.schoolNumber = 0;
window.$schoolNumberEl = $('.js-your-schools-number');

window.renderTemplate = function(name, context, el, callback) {
  html = Handlebars.templates[name](context);
    if (el) {
      html = $(html).css('opacity', 0).appendTo(el).animate({'opacity': 1}, 200).get(0);
    }
    return html
}

window.unRender = function(template, callback) {
  $(template).fadeOut('fast', function() {
    $(template).remove()
    if (callback && typeof callback === 'function') {
      callback()
    }
  });
}

window.renderSchool = function(i) {
  if (schoolData.length <= schoolNumber) schoolNumber = 0;
  html = renderTemplate('school-card', schoolData[schoolNumber]);
  $('.js-school-picker').html(html);
  schoolNumber++;
}

window.triggerMethods = {
  contactMethod: function() {
    var $radios = $('#js-contact-method').find('input[type="radio"]')
      , $input = $('#js-contact-method-input')
      , checkActive = function() {
        active = $radios.filter(function() {
          return $(this).get(0).checked
        });
        $input.attr('placeholder', $(active).data('placeholder'))
      }
    checkActive()
    $radios.on('change', function() {
      checkActive();
    });
  }
}

window.renderYourSchoolActive = function(index) {
  $('.js-your-schools-active').html('');
  if (index) {
    $('.js-your-schools').children().removeClass('active').filter(function() {
      return $(this).data('index') === index
    }).addClass('active');
  } else {
    var index = $('.js-your-schools').children().filter('.active').data(index).index
  }
  activeSchool = renderTemplate('your-schools-active', schoolData[index], '.js-your-schools-active')
  $(activeSchool).data('index', index);
}

window.events = {}

$(function() {
  var chancesArray = ['Reach', 'Likely', 'Target']

  for (var i = 0; i < schoolData.length; i++) { 
    schoolData[i].site_url = 'http://localhost:4000'
    if (schoolData[i].name) {
      var formattedName = schoolData[i].name.toLowerCase().replace(/\ -\ /g, '-').replace(/\ /g, '-')
    }
    schoolData[i].chance = chancesArray[Math.floor(Math.random() * chancesArray.length)];
    schoolData[i].banner = formattedName + '.jpg';
    schoolData[i].logo = formattedName + '.png';
  }

  if ($('.js-school-picker').length) {
    renderSchool()
  }

  if ($('.js-your-schools').length) {
    renderTemplate('your-schools', schoolData, '.js-your-schools')
    $('.js-your-schools').children().first().addClass('active')
    renderYourSchoolActive()
  }

  if (localStorage.getItem('login') === 'true') {
    user.login()
  }
});

