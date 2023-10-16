/* スクロール時のヘッダー */
$(window).scroll(function () {           
  var pos = $('section1').offset();          
  if ($(this).scrollTop() > pos.top) {   
    $('header').fadeIn();                
  } else {                               
    $('header').fadeOut();               
  }
});

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

/* fv */
window.addEventListener('scroll', () => {
  let elem = document.getElementById('wrapper');
  let scrollY = window.scrollY/10;
  elem.style.backgroundSize = 100 + scrollY + '%';
});

/* slider */
const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination", 
    type: "bullets",
    clickable: "clickable",
  },
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1.5,
  centeredSlides: true,
  centeredSlidesBounds: true,
});