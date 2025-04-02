let xindex = 0; // x좌표 방향대로 얼마만큼 이동했는지 기억할 변수
let yindex = 0; // y좌표 방향대로 얼마만큼 이동했는지 기억할 변수

document.addEventListener("keydown", function(e){
    const bomberman = document.getElementById("bomberman");
    // 위 코드를 전역변수로 설정시 innerHTML 을 실행하는 과정에서 DOM 이 리렌더링 됨.
    // 기존에 const bomberman = document.getElementById("bomberman"); 이 
    // 유효하지않음
    //ArrowUp //ArrowDown //ArrowRight //ArrowLeft
    
    switch(e.key){
        case 'ArrowRight' : xindex += 10; break;
        case 'ArrowLeft' : xindex -= 10; break;
        case 'ArrowUp' : yindex -= 10; break;
        case 'ArrowDown' : yindex += 10; break;
        case 'x' : 
         const box = document.querySelector("#box");
         box.innerHTML +=
         `<img src = "../../images/bomb.png"
         class = "bomb"
         style="transform: translate(${xindex}px, ${yindex}px);
         position:absolute">`;
        break;
        case 'z' : explodeBomb(); break;
        default: alert("방향키, z, x 만 가능");
    }
    
    bomberman.style.transform = `translate(${xindex}px, ${yindex}px)`;

});

const explodeBomb = () => {
    const bombs = document.querySelectorAll(".bomb");
    // bombs 유사 배열 형태

    // for.. of 문 : 배열같은 반복 가능한 요소를 순차적으로 순회하는 반복문
    for(let bomb of bombs){
        bomb.src = "../../images/boomm.png";
    }
}
