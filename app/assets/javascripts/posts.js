$(document).ready(function () {

  $('span.glyphicon.like-icon').on('click', function (e) {
    var currentElement = this;
    $.ajax({
      url: '/posts/' + $(this).data('id') + '/like',
      method: 'put'
    }).done(function (response) {
      $(currentElement)
        $.parent()
        .find('.like-count')
        .html(response.likes)
        .addClass('flash');

    setTimeout(function () {
        $(currentElement)
        .parent()
        .find('.like-count')
        .removeClass('flash');
    }, 1000);
    });
  });
});
