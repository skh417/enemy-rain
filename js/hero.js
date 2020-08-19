"use strict";

const hero = document.getElementsByClassName("hero")[0]; // 히어로
let heart = document.getElementsByTagName("i");
// 바닥에 있을때 hero offsetTop = 546 , 맨 위에 있을땐 6
window.addEventListener("keydown", heroControl);

function heroControl(e) {
  if (heart.length > 0) {
    if (e.keyCode === 37 && hero.offsetLeft > 0) {
      hero.style.left = hero.offsetLeft - 20 + "px";
      hero.style.backgroundPosition = "70px";
    } else if (e.keyCode === 39 && hero.offsetLeft < 760) {
      hero.style.left = hero.offsetLeft + 20 + "px";
      hero.style.backgroundPosition = "35px";
    } else if (e.keyCode === 40 && hero.offsetTop < 545) {
      hero.style.top = hero.offsetTop + 20 + "px";
      hero.style.backgroundPosition = "0px";
    } else if (e.keyCode === 38 && hero.offsetTop > 10) {
      hero.style.top = hero.offsetTop - 20 + "px";
      hero.style.backgroundPosition = "105px";
    }
  }
}
