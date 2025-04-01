const boxes = document.querySelectorAll(".box");
const inputBoxes = document.querySelectorAll(".color-input");

const clickBtn = document.querySelector("#changeButton");

clickBtn.addEventListener("click", function(){

    for(let i = 0; i <boxes.length; i++){
        
        boxes[i].style.backgroundColor = inputBoxes[i].value;
    }


});


