;(function(){
  var instaRectangle = document.querySelector(".instagram__img--rectangle");
  var instaBig = document.querySelector(".instagram__img--big");
  var instaBlock = document.querySelectorAll(".instagram__img"); 

 for( i = 0; i < instaBlock.length; i++) {
    var j = ( Math.round ( Math.random() * (instaBlock.length - 1) + 1 ));
    console.log(j);
    var imgPath = "url(\"../img/inst/img-" + j + ".jpg\")";
    instaBlock[i].style.backgroundImage = imgPath;   
  }  
   

  function toSizeInstaPost() {
    for( i = 0; i < instaBlock.length; i++) {

      instaBlock[i].style.height = instaBlock[1].offsetWidth/2 + "px"; 

    }
    instaRectangle.style.height = ((instaRectangle.offsetWidth) / 2) + "px";
    instaBig.style.height = instaBig.offsetWidth + "px";
  }
  function instaBlockRectangle() {
    
  }
  toSizeInstaPost();
  window.onresize = toSizeInstaPost;
})();

