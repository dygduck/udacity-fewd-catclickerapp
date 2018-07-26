// Instantly invoked function which increases the click number once the cat image clicked

var addUp = function(clickId) {
  var count = 0;

  return function() {
    var counterElement = document.getElementById(clickId);
    if (counterElement)
        counterElement.innerHTML = "Clicks: " + ++count;
  }
};

var catImage1 = document.getElementById("image1");
catImage1.addEventListener("click", addUp("cat1clicks"));

var catImage2 = document.getElementById("image2");
catImage2.addEventListener("click", addUp("cat2clicks"));

var catImage3 = document.getElementById("image3");
catImage3.addEventListener("click", addUp("cat3clicks"));

var catImage4 = document.getElementById("image4");
catImage4.addEventListener("click", addUp("cat4clicks"));

var catImage5 = document.getElementById("image5");
catImage5.addEventListener("click", addUp("cat5clicks"));
