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

/* ハンバーガーメニュー */
const backgroundFix = (bool) => {
  const scrollingElement = () => {
    const browser = window.navigator.userAgent.toLowerCase();
    if ("scrollingElement" in document) return document.scrollingElement;
    return document.documentElement;
  };

  const scrollY = bool
    ? scrollingElement().scrollTop
    : parseInt(document.body.style.top || "0");

  const fixedStyles = {
    height: "100vh",
    position: "fixed",
    top: `${scrollY * -1}px`,
    left: "0",
    width: "100vw"
  };

  Object.keys(fixedStyles).forEach((key) => {
    document.body.style[key] = bool ? fixedStyles[key] : "";
  });

  if (!bool) {
    window.scrollTo(0, scrollY * -1);
  }
};

// 変数定義
const CLASS = "-active";
let flg = false;
let accordionFlg = false;

let humberger = document.getElementById("js-humberger");
let focusTrap = document.getElementById("js-focus-trap");
let menu = document.querySelector(".js-nav-area");
let accordionTrigger = document.querySelectorAll(".js-sp-accordion-trigger");
let accordion = document.querySelectorAll(".js-sp-accordion");

// メニュー開閉制御
humberger.addEventListener("click", (e) => { //ハンバーガーボタンが選択されたら
  e.currentTarget.classList.toggle(CLASS);
  menu.classList.toggle(CLASS);
  if (flg) {// flgの状態で制御内容を切り替え
    backgroundFix(false);
    humberger.setAttribute("aria-expanded", "false");
    humberger.focus();
    flg = false;
  } else {
    backgroundFix(true);
    humberger.setAttribute("aria-expanded", "true");
    flg = true;
  }
});
window.addEventListener("keydown", () => {　//escキー押下でメニューを閉じられるように
  if (event.key === "Escape") {
    humberger.classList.remove(CLASS);
    menu.classList.remove(CLASS);

    backgroundFix(false);
    humberger.focus();
    humberger.setAttribute("aria-expanded", "false");
    flg = false;
  }
});

// フォーカストラップ制御
focusTrap.addEventListener("focus", (e) => {
  humberger.focus();
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
