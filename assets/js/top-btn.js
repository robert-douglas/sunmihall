const topBtn = document.getElementById("back-to-top-btn");



var myScrollFunc = function() {
  let y = window.scrollY;
  if (y >= 800) {
    topBtn.className = "btn-show"
  } else {
    topBtn.className = "btn-hide"
  }
};

window.addEventListener("scroll", myScrollFunc);
