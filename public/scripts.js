var bannerStatus = 1;
  var bannerTimer = 4000;

  window.onload = function (){
    bannerLoop()
  }

  var startBanner = setInterval(function(){
    bannerLoop()
  }, bannerTimer)
  
  function bannerLoop(){
    if (bannerStatus == 1){
      document.getElementById("imgban3").style.opacity = "0"

      document.getElementById("imgban1").style.right = "0px"
      document.getElementById("imgban1").style.zIndex = "1000"
      document.getElementById("imgban2").style.right = "-1800px"
      document.getElementById("imgban2").style.zIndex = "1500"
      document.getElementById("imgban3").style.right = "1800px"
      document.getElementById("imgban3").style.zIndex = "500"

      setTimeout(function(){
        document.getElementById("imgban3").style.opacity = "1"
      }, 4000)

      bannerStatus = 2
    }

    else if (bannerStatus == 2){
      document.getElementById("imgban1").style.opacity = "0"

      document.getElementById("imgban2").style.right = "0px"
      document.getElementById("imgban2").style.zIndex = "1000"
      document.getElementById("imgban3").style.right = "-1800px"
      document.getElementById("imgban3").style.zIndex = "1500"
      document.getElementById("imgban1").style.right = "1800px"
      document.getElementById("imgban1").style.zIndex = "500"

      setTimeout(function(){
        document.getElementById("imgban1").style.opacity = "1"
      }, 4000)
      bannerStatus = 3
    }

    else if (bannerStatus == 3){
      document.getElementById("imgban2").style.opacity = "0"

      document.getElementById("imgban3").style.right = "0px"
      document.getElementById("imgban3").style.zIndex = "1000"
      document.getElementById("imgban1").style.right = "-1800px"
      document.getElementById("imgban1").style.zIndex = "1500"
      document.getElementById("imgban2").style.right = "1800px"
      document.getElementById("imgban2").style.zIndex = "500"

      setTimeout(function(){
        document.getElementById("imgban2").style.opacity = "1"
      }, 4000)

      bannerStatus = 1
    }
  }

    //Get the button:
  mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }