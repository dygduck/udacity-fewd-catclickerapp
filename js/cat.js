// // Instantly invoked function which increases the click number once the cat image clicked
//
// var addUp = function(clickId) {
//   var count = 0;
//
//   return function() {
//     var counterElement = document.getElementById(clickId);
//     if (counterElement) {
//         counterElement.innerHTML = "Clicks: " + ++count;
//       };
//   };
// };
//
// var catImage1 = document.getElementById("image1");
// catImage1.addEventListener("click", addUp("cat1clicks"));
//
// var catImage2 = document.getElementById("image2");
// catImage2.addEventListener("click", addUp("cat2clicks"));
//
// var catImage3 = document.getElementById("image3");
// catImage3.addEventListener("click", addUp("cat3clicks"));
//
// var catImage4 = document.getElementById("image4");
// catImage4.addEventListener("click", addUp("cat4clicks"));
//
// var catImage5 = document.getElementById("image5");
// catImage5.addEventListener("click", addUp("cat5clicks"));




// our data mode: an array of cat objects, with properties: name, clickCount and imgURL.

// our view: we gonna split it into two views. 1st we have the list of cats and second we have the cat viewing area. they gonna have render functions that redraw the respective area. and they'll have click handlers registered

// ************* MODEL **************

var model = {
  currentCat : null,
  cats: [
    {
      clickCount: 0,
      name: 'Cat1',
      imgSrc: 'img/cat.png'
    },
    {
      clickCount: 0,
      name: 'Cat2',
      imgSrc: 'img/cat2.jpg'
    },
    {
      clickCount: 0,
      name: 'Cat3',
      imgSrc: 'img/cat3.jpg'
    },
    {
      clickCount: 0,
      name: 'Cat4',
      imgSrc: 'img/cat4.jpg'
    },
    {
      clickCount: 0,
      name: 'Cat5',
      imgSrc: 'img/cat5.jpg'
    }
  ]
};

// ************* OCTOPUS **************

var octopus = {

  // init method which starts off the entire application
  init: function() {
    // set our current cat to the first one in the list
    model.currentCat = model.cats[0];

    // tell our views to initialize
    catListView.init();
    catView.init();
  },

// the view calls the getCurrentCat and getCats in order to get the current cat or all of the cats so it can render properly

  getCurrentCat: function() {
    return model.currentCat;
  },

  getCats: function() {
    return model.cats;
  },

  // set the currently selected cat to the object passed in
  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  // increments the counter for the currently selected cat
  incrementCounter: function() {
    model.currentCat.clickCount++;
    catView.render();
  }
};


// ************* VIEW **************


var catView = {
  // it has init function and render function separated, because I can call the render function whenever needed but the init function only gets called once.
  init: function() {
    // store pointers to our DOM elements for easy access later
    this.catElem = document.getElementById('cat');
    this.catNameElem = document.getElementById('cat-name');
    this.catImageElem = document.getElementById('cat-img');
    this.countElem = document.getElementById('cat-count');

    // on click, increment the current cat's counter
    this.catImageElem.addEventListener('click', function(e) {
      octopus.incrementCounter();
    });

    // render this view and update the DOM elements with the right values
    this.render();
  },

  render: function() {
    // update the DOM elements with values from the current cat
    var currentCat = octopus.getCurrentCat();
    this.countElem.textContent = currentCat.clickCount;
    this.catNameElem.textContent = currentCat.name;
    this.catImageElem.src = currentCat.imgSrc;
  }
};

var catListView = {
  init: function() {
    // store the DOM element for easy access later
    this.catListElem = document.getElementById('cat-list');

    // render this view and update the DOM elements with the right values
    this.render();
  },

  render: function() {
    // get the cats we'll be rendering from the octopus
    var cats = octopus.getCats();

    // empty the cat list
    this.catListElem.innerHTML = '';

    // loop over the cats
    for (var i = 0; i < cats.length; i++) {
      // this is the cat we're currently looping over
      var cat = cats[i];
      // make a new cat list item and set its text
      var elem = document.createElement('li');
      elem.textContent = cat.name;

      // on click, setCurrentCat and render the catView (this uses our closure-in-a-loop trick to connect the value of the cat variable to the click event function)
      elem.addEventListener('click', (function(catCopy) {
        return function() {
          octopus.setCurrentCat(catCopy);
          catView.render();
        };
      })(cat));

      // and finally add the element to the list
      this.catListElem.appendChild(elem);
    };
  }
};

// make it go!
octopus.init();
