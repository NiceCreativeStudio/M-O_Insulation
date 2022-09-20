var prevScrollpos = window.pageYOffset;
let nav = document.getElementById("navbar");
var isMobileVersion = document.getElementsByClassName("open");

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (
    prevScrollpos > currentScrollPos ||
    window.pageYOffset < 50 ||
    isMobileVersion.length > 0
    ) {
      nav.style.top = "0";
    } else {
      nav.style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};

$(document).ready(function(){
  setTimeout(() => {
    nav.style.transform = "translate(-5rem)"; 
    $(".navLinks").css('display', 'block')
  }, 1175);
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      nav.style.background = "#ffffff";
      $(".navLinks").css('color', '#000000')
      $(".header__logo").css('display', 'block')
      $(".header__logo").css('color', 'black')
      $(".header__contact").css('display', 'block')
    }

    else{
      nav.style.background = "none";
      $(".navLinks").css('color', 'white')
      $(".header__logo").css('display', 'none')
      $(".header__contact").css('display', 'none')
    }
  })
})