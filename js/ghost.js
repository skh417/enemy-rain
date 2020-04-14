
setInterval(createGhost, 3000); // 고스트 랜덤 출현
function createGhost(){
    const ghostDiv = document.createElement('div'); // 고스트 div 태그 생성
    document.getElementsByClassName('bgContainer')[0].appendChild(ghostDiv);//부모태그에 고스트 div태그 삽입
    ghostDiv.classList.add('ghost'); 
    ghostDiv.style.left = (Math.random() * 750) + 'px'
    //console.log(ghostDiv.getBoundingClientRect().top);
}
setInterval(fallingGhost, 10) // 고스트 내려오는 함수 + 땅에 도착하거나 히어로에 부딛히면 고스트가 죽는 함수
function fallingGhost(){
    const ghost = document.getElementsByClassName('ghost');//고스트 접근
    for(let i = 0; i < ghost.length; i++){
        const goDown = ghost[i].offsetTop + 2;
        if(ghost[i].offsetTop === 550){
            // let bg = document.getElementsByClassName('bgContainer')[0];
            // let ghostDead = document.getElementsByClassName('ghostDead')[0];       
            ghost[i].style.backgroundPosition = '45px';
            ghost[i].className = 'ghostDead'
            // setTimeout(() => {
            //     bg.removeChild(ghostDead)
            // },1000);   
            setTimeout(() => {
                removeGhost();
            }, 2000);
        } else if(ghost[i].offsetTop === 490 && ghost[i].offsetLeft > hero.offsetLeft - 45 && ghost[i].offsetLeft < hero.offsetLeft+35){
            ghost[i].style.backgroundPosition = '45px';
            ghost[i].className = 'ghostDead';
            setTimeout(() => {
                    removeGhost();
                }, 2000);
        } else {
            ghost[i].style.top = goDown + 'px';
        }
    }
}

function removeGhost(){
    let ghostDead = document.getElementsByClassName('ghostDead')[0];
    let bg = document.getElementsByClassName('bgContainer')[0];
    bg.removeChild(ghostDead);
}







//setInterval(showGhost , 4000);

// function showGhost(){
//     if(true){
//         const ghostDiv =  document.createElement('div'); // 유령이 들어갈 div태그 생성
//         const addGhostDiv = document.getElementsByClassName('bgContainer')[0].appendChild(ghostDiv);// 유령 div를 부모 div태그에 appendChild 하기
//         const random600 = Math.random()*750 ; // 0~600에서 소숫점 포함한 랜덤 숫자
//         const randomNum = Math.floor(random600); // 0~600에서 소숫점 뺀 랜덤 숫자
//         addGhostDiv;
//         ghostDiv.classList.add('ghost');
//         ghostDiv.style.left = randomNum + 'px'
//         setInterval (function ghostRain(){
//             const ghost =  document.getElementsByClassName('ghost');
//             ghost[0].style.backgroundPositon = '45px'
//             for(let i = 0; i < ghost.length; i++){
//                 const goDown = ghost[i].offsetTop;
//                 if(ghost[i].offsetBottom === '0px'){
//                     ghost[i].style.backgroundPosition = '45px'
//                 } else {
//                     ghost[i].style.top = (goDown + 20)+ 'px';
//                 }
//             }
//         }, 2000)
        
//     }
// }


// function ghostRain(){
//     const ghost =  document.getElementsByClassName('ghost')[i];
//     for(let i = 0; i < ghost.length; i++){
//         ghost.style.top = ghost.offsetTop + 'px';
//     }
// }





