let docHeight = document.documentElement.scrollHeight;

$(window).on('scroll', function() {
  var winScroll = $(this).scrollTop();
  let winHeight = $(this).innerHeight();
  let winWidth = $(this).innerWidth();
  let scrollLength = docHeight-winHeight;
  var arr = document.getElementsByClassName("animate");

  for (var i = 0; i < arr.length; i++) {
    let element = $("#" + arr[i].id)
    let pos = element.offset().top;
    let posSide = element.offset().left;

    let side = posSide < winWidth/2 ? "right" : "left";
    console.log("side: " + side);
    element.addClass(side);
    
    if(winScroll > pos - winHeight*.6){
       let side = posSide < winWidth/2 ? "right" : "left";
       console.log("side: " + side);
       element.addClass(side);
       element.addClass("animated");
       element.removeClass("right");
       element.removeClass("left");
       element.removeClass("animate");
     }
  }
});
