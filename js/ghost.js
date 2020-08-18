const background = document.getElementsByClassName("bgContainer")[0];

setInterval(createGhost, 3000); // 고스트 출현 반복시간 설정
setInterval(fallingGhost, 10); // 고스트 내려오는 속도 설정

// setInterval에 첫번째 인자로 들어갈 고스트 생성 함수 설정
function createGhost() {
  const ghostDiv = document.createElement("div"); // 고스트 div 태그 생성
  document.getElementsByClassName("bgContainer")[0].appendChild(ghostDiv); //부모태그에 고스트 div태그 삽입
  ghostDiv.className = "ghost"; // ghost라는 class 명을 부여한다.
  //ghostDiv.classList.add("ghost"); Element.classList.add()도 클래스명을 부여할 수 있는 방법 .remove()로 삭제도 가능
  ghostDiv.style.left = Math.random() * 750 + "px"; // 고스트의 출현 위치를 랜덤으로 설정
}

function fallingGhost() {
  const ghost = document.getElementsByClassName("ghost"); //고스트 접근
  for (let i = 0; i < ghost.length; i++) {
    const goDown = ghost[i].offsetTop + 2;
    if (ghost[i].offsetTop > 545) {
      // ghost가 바닥까지 도달한 경우 ? 증발..
      ghost[i].className = "ghostAlive";
      setTimeout(() => {
        removeGhost(false);
      }, 500);
    } else if (
      // ghost가 hero와 접촉한 경우 ? 사망..
      ghost[i].offsetTop + 30 > hero.offsetTop &&
      ghost[i].offsetTop + 30 < hero.offsetTop + 54 &&
      ghost[i].offsetLeft > hero.offsetLeft - 30 &&
      ghost[i].offsetLeft < hero.offsetLeft + 30
    ) {
      ghost[i].style.backgroundPosition = "45px";
      ghost[i].className = "ghostDead";
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
