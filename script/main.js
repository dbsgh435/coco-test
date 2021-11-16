const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

rightArrow.addEventListener('click', function() {slideMove("-160")})
leftArrow.addEventListener('click', function() {slideMove("0")})

function slideMove(a) {
  const slideBox = document.querySelector(".product-box");
  slideBox.animate([
    { transform: "translateX(" + a + "px)"}
  ], {
      duration: 400,
      fill: "forwards",
      easing: "ease-in-out"
  });   
}