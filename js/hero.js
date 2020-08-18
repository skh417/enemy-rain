const hero = document.getElementsByClassName("hero")[0]; // 히어로
// const cssOfHero = window.getComputedStyle(hero); // .hero의 css에 접근
// let leftValue = cssOfHero.left; // .hero의 css 효과중 left의 값
// let leftValueWithoutPx = parseInt(leftValue); // .hero의 css중 left의 값에서 px제거한 숫자

// 바닥에 있을때 hero offsetTop = 546 , 맨 위에 있을땐 6

window.addEventListener("keydown", move);

function move(e) {
  console.log(hero.offsetLeft);
  //   console.log(e.keyCode); // 콘솔창에서 keyCode 확인하기 ;
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
