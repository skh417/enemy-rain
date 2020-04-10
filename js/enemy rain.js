const hero = document.getElementsByClassName('hero')[0] // 히어로


window.addEventListener('keypress', move)

function move(e){
    if(e.key === 'a'){
        hero.style.backgroundPosition = '70px'
    } else if(e.key === 'd') {
        hero.style.backgroundPosition = '35px'
    } else if(e.key === 's'){
        hero.style.backgroundPosition = '0px'
    } else if(e.key === 'w'){ 
        hero.style.backgroundPosition = '105px'
    }
}