"use strict";
const background = document.getElementsByClassName("bgContainer")[0];
const heartContainer = document.getElementsByClassName("heartContainer")[0];
const gameOverMsg = document.getElementsByClassName(
  "invisibleGameOverContainer"
)[0];
const ghostStart = setInterval(createGhost, 3000); // 고스트 출현 반복시간 설정
const ghostRain = setInterval(fallingGhost, 10); // 고스트 내려오는 속도 설정
let ghostCount = 0;

// setInterval에 첫번째 인자로 들어갈 고스트 생성 함수 설정
function createGhost() {
  const ghostDiv = document.createElement("div"); // 고스트 div 태그 생성
  background.appendChild(ghostDiv); //부모태그에 고스트 div태그 삽입
  ghostDiv.className = "ghost"; // ghost라는 class 명을 부여한다.
  ghostDiv.style.left = Math.random() * 750 + "px"; // 고스트의 출현 위치를 랜덤으로 설정
}

function fallingGhost() {
  const ghost = document.getElementsByClassName("ghost"); //고스트 접근

  for (let i = 0; i < ghost.length; i++) {
    const goDown = ghost[i].offsetTop + 2;

    if (ghost[i].offsetTop > 545) {
      // ghost가 바닥까지 도달한 경우 ? 하트 감소
      let heart = document.getElementsByTagName("i");
      ghost[i].className = "ghostAlive";
      setTimeout(() => {
        removeGhost(false);
      }, 500);
      heartContainer.removeChild(heart[heart.length - 1]);
      if (heart.length === 0) {
        gameOver();
      }
    } else if (
      // ghost가 hero와 접촉한 경우 ? 사망..
      ghost[i].offsetTop + 30 > hero.offsetTop &&
      ghost[i].offsetTop + 30 < hero.offsetTop + 54 &&
      ghost[i].offsetLeft > hero.offsetLeft - 30 &&
      ghost[i].offsetLeft < hero.offsetLeft + 30
    ) {
      ghost[i].style.backgroundPosition = "45px";
      ghost[i].className = "ghostDead";
      ghostCount += 1;
      document.getElementsByClassName("ghostCount")[0].innerHTML = ghostCount;
      setTimeout(() => {
        removeGhost(true);
      }, 2000);
    } else {
      // ghost의 하강
      ghost[i].style.top = goDown + "px";
    }
  }
}

function removeGhost(isGhostDead) {
  let ghostDead = document.getElementsByClassName("ghostDead")[0];
  let ghostAttack = document.getElementsByClassName("ghostAlive")[0];
  isGhostDead
    ? background.removeChild(ghostDead)
    : background.removeChild(ghostAttack);
}

function gameOver() {
  clearInterval(ghostRain);
  clearInterval(ghostStart);
  gameOverMsg.className = "visibleGameOverContainer";
  buttonTag.style.display = "inline";
}
