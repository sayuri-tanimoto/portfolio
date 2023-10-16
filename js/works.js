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

/* gallery */
$(".hoge-item1 .img-box1 >img").click(function () {
  var src = $(this).attr("src");
  $(".modal-block1").fadeIn()
  $(".modal-block1").css("display", "flex")
  $("#popup1").attr("src", src);
});
$(".img-section1 >span").click(function () {
  $(".modal-block1").css("display", "none")
});
$(".hoge-item2 .img-box2 >img").click(function () {
  var src = $(this).attr("src");
  $(".modal-block2").fadeIn()
  $(".modal-block2").css("display", "flex")
  $("#popup2").attr("src", src);
});
$(".img-section2 >span").click(function () {
  $(".modal-block2").css("display", "none")
});
$(".hoge-item3 .img-box3 >img").click(function () {
  var src = $(this).attr("src");
  $(".modal-block3").fadeIn()
  $(".modal-block3").css("display", "flex")
  $("#popup3").attr("src", src);
});
$(".img-section3 >span").click(function () {
  $(".modal-block3").css("display", "none")
});
$(".hoge-item4 .img-box4 >img").click(function () {
  var src = $(this).attr("src");
  $(".modal-block4").fadeIn()
  $(".modal-block4").css("display", "flex")
  $("#popup4").attr("src", src);
});
$(".img-section4 >span").click(function () {
  $(".modal-block4").css("display", "none")
});

function modalClose() {
  modal.classList.remove('is-active');
}
close.addEventListener('click', modalClose);
