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

  // event
  $('img').click(function () {
    console.log($(this))
    $(this).toggleClass('special')
  })

  // AJAX
  $('#content').load('./about.html')
  $('#contentNav .nav-link').click(function (e) {
    console.log(e)
    e.preventDefault()
    var page = $(this).attr('href')
    $('#contentNav .active').removeClass('active')
    $(this).addClass('active')
    $('#content')
      .fadeOut(500, function () {
        $('#content').load(page)
      })
      .fadeIn(500)
    // closeing click event on the nav-link
  })
  // $.ajax({
  //   url: './data/posts.json',
  //   type: 'GET',
  //   dataType: 'json'
  // }).done(function(data) {
  //   console.log(data)
  //   var numPosts = data.posts.length
  //   for (var i = 0; i < numPosts; i++) {
  //     var post = '<div class="col-sm-6 p-5"><h3>'
  //     post += i + 1 + '. ' + data.posts[i].title
  //     post += '</h3><p>'
  //     post += data.posts[i].body
  //     post += '</p></div>'

  //     $('#posts').append(post)
  //     // <div class="col-sm-6 p-5">
  //     //   <h3>Title</h3>
  //     //   <p>Content</p>
  //     // </div>
  //   }
  // })
  // second way do ajax
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    type: 'GET',
    dataType: 'json'
  }).done(function (data) {
    console.log(data)
    var numPosts = data.length
    for (var i = 0; i < numPosts; i++) {
      var post = '<div class="col-sm-6 p-5"><h3>'
      post += i + 1 + '. ' + data[i].title
      post += '</h3><p>'
      post += data[i].body
      post += '</p></div>'

      $('#posts').append(post)
      // <div class="col-sm-6 p-5">
      //   <h3>Title</h3>
      //   <p>Content</p>
      // </div>
    }

    // close ajax
  })

  // initialize aos
  AOS.init()
  // close the document.ready
})
