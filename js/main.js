$(document).ready(function ($) {
  $('p').css('border-bottom', '1px solid black')
  $('.first').css('border-color', 'red')
  $('#special').css('background-color', '#ffcc00')
  $('p.first small').css('background-color', 'lightgrey')
  // $('.first').text('Lets learn jQuery')
  $('.first').html('Lets learn <em>jQuery</em>')
  $('.first').prepend('<h2>Welcome</h2>')
  $('.first').after('<small>Make webpages interactive</small>')
  $('#yourName').val('Bob Builder')
  // attribute selectors
  $('a[href="#1"]').css('background-color', 'tomato')
  $('a[href^="#"]').css('color', 'grey') // $ end with ...
  $('a[href*="google"]').css('font-weight', 'bold')
  // animation functions
  // $('.card:first')
  //   .delay(1000)
  //   .hide(400)
  //   .show(800, function () {
  //     alert("we're back")
  //   })
  $('.card').animate({ borderRadius: '20px' }, 2000)
  // attribute method
  $('img:first').attr('src', './img/image-5.jpg')

  // class methods
  console.log($('img:first').hasClass('special'))
  $('img').toggleClass('special')
})

// event
$('img').click(function () {
  console.log($(this))
  $(this).toggleClass('special')
})
