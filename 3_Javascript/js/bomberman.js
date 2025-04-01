// 이동
const box = document.getElementById("box");

document.addEventListener("keydown", function(e){
    const bomberman = document.getElementById("bomberman");
    // 위 코드를 전역변수로 설정시 innerHTML 을 실행하는 과정에서 DOM 이 리렌더링 됨.
    // 기존에 const bomberman = document.getElementById("bomberman"); 이 
    // 유효하지않음
    //ArrowUp //ArrowDown //ArrowRight //ArrowLeft
    let x = bomberman.offsetLeft;
    let y = bomberman.offsetTop;

    // 이동 (transform 대신 left/top 직접 수정)
    if (e.key === "ArrowUp") {
        bomberman.style.top = `${y - 10}px`;
    }
    if (e.key === "ArrowDown") {
        bomberman.style.top = `${y + 10}px`;
    }
    if (e.key === "ArrowRight") {
        bomberman.style.left = `${x + 10}px`;
    }
    if (e.key === "ArrowLeft") {
        bomberman.style.left = `${x - 10}px`;
    }
/*   if(e.key == 'ArrowUp'){
    console.log(e.key);
    bomberman.style.transform += `translateY(-10px)`;
  }
  if(e.key == 'ArrowDown'){
    console.log(e.key);
    bomberman.style.transform += `translateY(10px)`;
  }
  if(e.key == 'ArrowRight'){
    console.log(e.key);
    bomberman.style.transform += `translateX(10px)`;
  }
  if(e.key == 'ArrowLeft'){
    console.log(e.key);
    bomberman.style.transform += `translateX(-10px)`;
  } */


  // 폭탄투하
  let currKey = e.key.toLowerCase();
  if (currKey == "x"){
    
    //box.innerHTML += `<img src = "../../images/bomb.png" id="bomb">`;
    //left:${x}px; top:${y}px;
    box.innerHTML += `<img src="../../images/bomb.png" class="bomb" style="position:absolute;left:${x}px; top:${y}px;">`;
    
  }

   // 폭탄터짐
   if (currKey == "z"){
     console.log(e.key);

     //box.innerHTML += `<img src = "../../images/boomm.png" id="boomm">`;
     box.innerHTML = box.innerHTML.replace(/bomb\.png/g, "boomm.png");
   }
});
