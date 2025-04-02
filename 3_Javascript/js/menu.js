
/* 힌트.
1. input 태그가 focus를 잃었을 때 (blur) : 요소.addEventListener("blur", () => {})
2. classList.toggle() : 지정된 클래스가 요소에 존재하면 제거하고,
존재하지 않으면 추가하는 방식 */


//const updateBtn = document.getElementById("updateBtn");
const updateBtn = document.querySelector(".normal-container"); // 수정버튼
const btns = document.querySelector(".edit-container"); // 추가 / 삭제 / 종료 버튼들
const menuContainer = document.querySelector(".menu-container"); // 메뉴 컨테이너
const menuList = document.querySelectorAll(".menu"); // li 메뉴

// 클릭시 입력창 활성화
document.getElementById("resName").addEventListener("click", (e) => {
    const inputBox = document.getElementById("resNameInput");

    e.target.style.display = "none";
    inputBox.style.display="block";
    inputBox.focus();

    // input 태그가 focus를 잃었을 때
    inputBox.addEventListener("blur", () => {
        
        // input 이 공백일 경우
        if(inputBox.value.length == 0){
            e.target.style.display = "block";
            inputBox.style.display="none";
            return;
        }

        // span 에 input에 입력된 value 값을 넣고 display 속성 변경
        e.target.innerText = inputBox.value;
        e.target.style.display = "block";
        inputBox.style.display="none";
    });
})

// 수정 버튼 눌렀을 때 추가 / 삭제 / 종료 버튼 뜨도록
updateBtn.addEventListener("click", () => {
    updateBtn.classList.toggle("b-hidden", true);
    btns.classList.toggle("b-hidden", false);
    btns.classList.toggle("b-show", true);

    // 기존에 있던 메뉴 수정 가능하도록 input박스로 만들어줌
    const menuName = document.querySelectorAll(".menu-name");
    const menuPrice = document.querySelectorAll(".menu-price");

    for(let i = 0; i < menuName.length; i++){   // span 의 갯수만큼 for문에서 반복 
        // input box 생성
        const menu = document.createElement("li");
        menu.classList.add("menu");

        const checkBox = document.createElement("input"); // 메뉴명 입력
        checkBox.classList.add("checkbox");
        checkBox.setAttribute("type", "checkbox");

        const menuNameInput = document.createElement("input"); // 가격 입력
        menuNameInput.classList.add("menu-name-input");
        
        if(menuName[i].innerText =="미입력"){   // span에 들어있는 값이 미입력일경우(기존에 값을 입력하지 않았을 때)
            menuNameInput.setAttribute("placeholder", "메뉴명"); // placeholder를 메뉴명으로 바꿔줌
        } else {
            menuNameInput.value = menuName[i].innerText;
        }

        const menuPriceInput = document.createElement("input");
        menuPriceInput.classList.add("menu-price-input");

        if(menuPrice[i].innerText =="0원"){     //span에 들어있는 값이 0원일경우(기존에 값을 입력하지 않았을 때)
            menuPriceInput.setAttribute("placeholder", "가격");  // placeholder를 가격으로 바꿔줌
        } else {
            // 기존 가격에서 문자를 제외한 숫자만 가져와서 value 에 넣도록 함.
            //let regExp = /[^0-9]/g
            let regExp = /[^0-9]/;      // 숫자가 아닌 문자열을 선택하는 정규식
            let onlyPrice = menuPrice[i].innerText.replace(regExp, "");
            menuPriceInput.value = onlyPrice;
        }

        // li 태그 안에 추가
        menu.append(checkBox, menuNameInput, menuPriceInput);
        
        menuContainer.append(menu);

        // 기존 부모 요소 삭제 (;o)
        menuName[i].parentElement.remove();
        //menuPrice[i].parentElement.remove();
    }
});

// 종료버튼 눌렀을 때 수정버튼 보이도록
document.getElementById("exitBtn").addEventListener("click", (e) => {
    btns.classList.toggle("b-hidden", true);
    btns.classList.toggle("b-show", false);
    updateBtn.classList.toggle("b-hidden", false);

    // input에 들어간 값 유지되면서 span태그로 변경되도록 수정.
    const menuNameInput = document.querySelectorAll(".menu-name-input");
    const menuPriceInput = document.querySelectorAll(".menu-price-input");
    
    // 현재 있는 메뉴 갯수만큼 for 문 반복
    for(let i = 0; i < menuNameInput.length; i++){
        
        const menu = document.createElement("li");
        menu.classList.add("menu");

        const menuName = document.createElement("span");
        menuName.classList.add("menu-name");
        // 메뉴명 공백일 경우 미입력 넣기
        if(menuNameInput[i].value == ""){
            menuName.innerText = "미입력";
        } else {    // input박스에 있는 값 넣기
            menuName.innerText = menuNameInput[i].value;
        }
        
        const menuPrice = document.createElement("span");
        menuPrice.classList.add("menu-price");
        // 가격이 없을 경우 0원 입력
        if(menuPriceInput[i].value == ""){
            menuPrice.innerText = "0원";
        } else menuPrice.innerText = menuPriceInput[i].value + "원";
        // 가격이 있을 경우 해당 금액 입력
        
        console.log("menuPriceInput[i].value : " + menuPriceInput[i].value);

        menu.append(menuName, menuPrice);
        menuContainer.append(menu);

        menuNameInput[i].parentElement.remove();
        //menuPriceInput[i].parentElement.remove();
    }
})


// 추가 버튼 눌렀을 때
document.getElementById("addMenu").addEventListener("click", () => {

    const menu = document.createElement("li");
    menu.classList.add("menu");

    const checkBox = document.createElement("input");
    checkBox.classList.add("checkbox");
    checkBox.setAttribute("type", "checkbox");

    const menuNameInput = document.createElement("input");
    menuNameInput.classList.add("menu-name-input");
    menuNameInput.setAttribute("placeholder", "메뉴명");

    const menuPriceInput = document.createElement("input");
    menuPriceInput.classList.add("menu-price-input");
    menuPriceInput.setAttribute("placeholder", "가격");
   
    menu.append(checkBox, menuNameInput, menuPriceInput);
    menuContainer.append(menu);
} );


// 삭제 버튼 눌렀을 때
document.getElementById("deleteMenu").addEventListener("click", () => {
    const checkList = document.querySelectorAll(".checkbox")

    for(let chk of checkList){
        if(chk.checked){
            const parent = chk.parentElement; 

            // 부모 요소를 제거하기
            parent.remove();
        }
    }
});