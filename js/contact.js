/* scroll_up effect */
$(window).scroll(function (){
  $('.scroll_up').each(function(){
    var elemPos = $(this).offset().top,
    scroll = $(window).scrollTop(),
    windowHeight = $(window).height();

      if (scroll > elemPos - windowHeight + 150){
        $(this).addClass('scrollin');
      }
  });
});

/* topへ戻る時の動き */
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

