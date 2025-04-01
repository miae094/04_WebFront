// 문자열.toLowerCase() : 영어를 모두 소문자로 변경 
// 문자열.toUpperCase() : 영어를 모두 대문자로 변경

/* 
const boxBg1 = document.querySelector(".key-box > div:nth-child(1)");
const boxBg2 = document.querySelector(".key-box > div:nth-child(2)");
const boxBg3 = document.querySelector(".key-box > div:nth-child(3)");
const boxBg4 = document.querySelector(".key-box > div:nth-child(4)");

console.log(boxBg4);

document.addEventListener("keydown", function(e){
    console.log(e.key.toUpperCase());

    if(e.key.toUpperCase() == 'Q'){
        boxBg1.style.backgroundColor = "skyblue";
        
     } else if(e.key.toUpperCase() == 'W'){
        boxBg2.style.backgroundColor = "skyblue";
        
     } else if(e.key.toUpperCase() == 'E'){
        boxBg3.style.backgroundColor = "skyblue";
        
     } else if(e.key.toUpperCase() == 'R'){
        boxBg4.style.backgroundColor = "skyblue";
     }
    
});

document.addEventListener("keyup", function(e){
    if(e.key.toUpperCase() == 'Q'){
        boxBg1.style.backgroundColor = "white";
        
     } else if(e.key.toUpperCase() == 'W'){
        boxBg2.style.backgroundColor = "white";
        
     } else if(e.key.toUpperCase() == 'E'){
        boxBg3.style.backgroundColor = "white";
        
     } else if(e.key.toUpperCase() == 'R'){
        boxBg4.style.backgroundColor = "white";
     }
    
});
 */


/*
// 선생님 방법 1


// 화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key");

// 화면(문서자체)에서 키사 눌러지는걸 감지했을 때
document.addEventListener("keydown", function(e){

    let idx; // 인덱스 값을 저장할 변수

    // 입력된 키를 소문자로 바꿔서 일치하는 CASE 실행
    switch(e.key.toLowerCase()){
        case 'q' : idx=0; break;
        case 'w' : idx=1; break;
        case 'e' : idx=2; break;
        case 'r' : idx=3; break;
        default : return; // 다른 키가 들어오면 함수 종료
    }

    // idx와 일치하는 keys 배열의 요소의 배경색을 변경
    keys[idx].style.backgroundColor = "skyblue";

});

// 화면(문서자체)에서 키사 떼어지는걸 감지했을 때
document.addEventListener("keyup", function(e){

    let idx; // 인덱스 값을 저장할 변수

    // 입력된 키를 소문자로 바꿔서 일치하는 CASE 실행
    switch(e.key.toLowerCase()){
        case 'q' : idx=0; break;
        case 'w' : idx=1; break;
        case 'e' : idx=2; break;
        case 'r' : idx=3; break;
        default : return; // 다른 키가 들어오면 함수 종료
    }

    // idx와 일치하는 keys 배열의 요소의 배경색을 변경
    keys[idx].style.backgroundColor = "white";

});
*/


// 선생님 방법 2

// 화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key");

// 키보드 이벤트 핸들러 함수
function changeKeyColor(e, color){
                    // e : 이벤트 종류 객체
                    // color : 색상

    const keyMap = {'q' : 0, 'w' : 1, 'e' : 2, 'r': 3};

    const idx = keyMap[e.key.toLowerCase()];

    // keyMap에 없는 값 입력되었을 때 idx는 undifined
    if(idx != undefined){
        keys[idx].style.backgroundColor = color;
        // keys[idx] 요소 배경색을 매개변수로 전달받은 color 변경
    }
}

// 키가 눌렸을 때 실행
document.addEventListener("keydown", (e) => changeKeyColor(e, "deepPink"));
document.addEventListener("keyup", (e) => changeKeyColor(e, "white"));