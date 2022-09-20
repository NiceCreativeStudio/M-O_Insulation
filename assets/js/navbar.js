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
    $(".indexLinks").css('display', 'block')
  }, 1175);
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      nav.style.background = "#ffffff";
      $(".indexLinks").css('color', '#000000')
      $(".indexLogo").css('display', 'block')
      $(".indexLogo").css('color', 'black')
      $(".indexContact").css('display', 'block')
    }

    else{
      nav.style.background = "none";
      $(".indexLinks").css('color', 'white')
      $(".indexLogo").css('display', 'none')
      $(".indexContact").css('display', 'none')
    }
  })
})