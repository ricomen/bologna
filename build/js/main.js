(function(){
  var instaRectangle = document.querySelector(".instagram__img--rectangle");
  var instaBig = document.querySelector(".instagram__img--big");
  var instaBlock = document.querySelectorAll(".instagram__img"); 
  var mainNav = document.querySelector(".main-nav");
  var mainNavToggle = document.querySelector(".main-nav__toggle");

  mainNavToggle.addEventListener("click", function(e) {
    e.preventDefault();
    mainNav.classList.toggle("main-nav--closed");
    mainNavToggle.classList.toggle("main-nav__toggle--close");
  });
  
  mainNav.classList.remove('main-nav--nojs');

  for( var i = 0; i < instaBlock.length; i++) {
    var j = ( Math.round ( Math.random() * (instaBlock.length - 1) + 1 ));    
    var imgPath = "url(\"img/inst/img-" + j + ".jpg\")";
    instaBlock[i].style.backgroundImage = imgPath;   
  }  
  function toSizeInstaPost() {
    for( var i = 0; i < instaBlock.length; i++) {

      instaBlock[i].style.height = instaBlock[1].offsetWidth/2 + "px"; 

    }
    instaRectangle.style.height = ((instaRectangle.offsetWidth) / 2) + "px";
    instaBig.style.height = instaBig.offsetWidth + "px";
  }
    
  toSizeInstaPost();
  window.onresize = toSizeInstaPost;

  var btnToTop = document.querySelector(".btnToTop");  

  btnToTop.addEventListener ( "click" , function(event) {
    event.preventDefault();
    scrollToTop();
  });
  
  function scrollToTop() {
    var top = window.pageYOffset;

    var timer = setInterval( function() {

      top -= 15;
      window.scrollTo(0, top);
      if ( window.pageYOffset <= 0 ) {
        clearInterval(timer);
      }
    }, 5);
  }

  window.onscroll = function() {
    if ( window.pageYOffset >= 500 ) {
      btnToTop.style.opacity = "1";
      btnToTop.classList.add("btnToTop--show");
    } else {
      btnToTop.style.opacity = "0";
      btnToTop.classList.remove("btnToTop--show");
    }
  };

  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    adaptiveHeight: true
  });

})();