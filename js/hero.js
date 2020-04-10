const hero = document.getElementsByClassName('hero')[0] // 히어로
const cssOfHero = window.getComputedStyle(hero); // .hero의 css에 접근
let leftValue = cssOfHero.left; // .here의 css 효과중 left의 값
let leftValueWithoutPx = parseInt(leftValue); // .hero의 css중 left의 값에서 px제거한 숫자

window.addEventListener('keydown', move)

function move(e){
    if(e.key === 'a' || e.key === 'ㅁ'){
        hero.style.backgroundPosition = '70px'
        let toLeft = leftValueWithoutPx -= 5;
        hero.style.left = toLeft+'px';
    } else if(e.key === 'd' || e.key === 'ㅇ') {
        hero.style.backgroundPosition = '35px'
        let toRight = leftValueWithoutPx += 5;
        hero.style.left = toRight+'px';
    } else if(e.key === 's' || e.key ==='ㄴ'){
        hero.style.backgroundPosition = '0px'
    } else if(e.key === 'w' || e.key === 'ㅈ'){ 
        hero.style.backgroundPosition = '105px'
    }
}