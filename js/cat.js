
var text = document.createTextNode("Cat1");
document.getElementById("header1").appendChild(text);
var cat1 = document.getElementById("image1"),
  count = 0;
// cat.onclick = function() {
//   count += 1;
//   clicks.innerHTML = count;
// };

function clickMe() {
  count += 1;
  document.getElementById("clicks").innerHTML = count;
}
cat1.addEventListener("click", clickMe);
