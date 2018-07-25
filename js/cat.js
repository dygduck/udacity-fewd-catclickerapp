// Creating a text node to be added to html
var text1 = document.createTextNode("Cat1");
// appending the text node to the assigned header
document.getElementById("header1").appendChild(text1);
var cat1 = document.getElementById("image1");
var count1 = 0;

// click counter function for the cat1
function counter1() {
  count1 += 1;
  document.getElementById("clicks1").innerHTML = count1;
}
// adding an event listener to cat1 so once it is clicked the counter1 function will be called and the click number will increase
cat1.addEventListener("click", counter1);


// Creating a text node to be added to html
var text2 = document.createTextNode("Cat2");
// appending the text node to the assigned header
document.getElementById("header2").appendChild(text1);
var cat2 = document.getElementById("image2");
var count2 = 0;
// click counter function for the cat1
function counter2() {
  count2 += 1;
  document.getElementById("clicks2").innerHTML = count2;
}
// adding an event listener to cat1 so once it is clicked the counter2 function will be called and the click number will increase
cat2.addEventListener("click", counter2);
