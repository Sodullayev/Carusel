const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const slide = document.getElementById("slide");
const number = document.getElementById("number");


let imgs = ["./images/cat.jpeg", "./images/cat2.jpeg", "./images/парная.jpeg" , "./images/копия.jpeg"];

let active = 0;
number.innerHTML = active + 1
btnRight.addEventListener("click", () => {
  active++;
  if (active >= imgs.length) {
    active = 0;
  }

  slide.src = imgs[active];
number.innerHTML = active + 1

});

btnLeft.addEventListener("click", () => {
  active--;

  if (active < 0) {
    active = imgs.length - 1;
  }

  slide.src = imgs[active];
number.innerHTML = active + 1

});