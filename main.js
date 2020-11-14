$(function() {
  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
  });

  $('.thumb').slick({
    autoplay:true,
    autoplaySpeed:2000,
    dots:true,
    focusOnSelect: true,
    slidesToShow:3,
    slidesToScroll:1
  })

  $('.hover').hover(
    function() {
      $('main').addClass('index');
    },
    function() {
      $('main').removeClass('index');
    }
  );

  let topBtn = $('#top');
  topBtn.hide();
  $(window).scroll(function () {

      if ($(this).scrollTop() > 200) {
          topBtn.fadeIn();
      } else {

          topBtn.fadeOut();
      }
  });

  topBtn.click(function() {
    $('body, html').animate({scrollTop: 0}, 300, 'linear');
  });



});
