var heartIcons = document.querySelectorAll(".heart-icon");
var heartCounts = document.querySelectorAll(".heart-count");

heartIcons.forEach(function(heartIcon, index) {
  var count = 0;
  var clicked = false;

  heartIcon.addEventListener("click", function() {
    if (!clicked) {
      count++;
      heartCounts[index].innerText = count;
      heartIcon.classList.toggle("fas");
      clicked = true;
    }
  });
});
