const slider = document.querySelectorAll(".app-carusel-content");
const dot = document.querySelectorAll(".app-carusel-circle");
let index = 0;


window.onload = activeSlide(index);

function activeSlide(n) {
  slider.forEach((slider, sliderIndex) => {
    if (n == sliderIndex) {
      slider.style.display = "block";
      slider.style.animation = "slide 0.5s ease-in-out";
    }else{
      slider.style.display = "none";
    }
  });
}

// dot.forEach((item,index) => {
//   item.addEventListener("click", () => {
//     activeSlide(item.index);
//   });
// })

function curentSlice(n) {
  activeSlide((index = n));
}