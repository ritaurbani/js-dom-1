
//preleva img

const lampElement= document.querySelector(".lamp");
console.log(lampElement);

//preleva btn

const turnOnBtnElem = document.querySelector(".turnon-btn");
console.log(turnOnBtnElem);

// const turnOffBtnElem = document.querySelector(".turnoff-btn");
// console.log(turnOffBtnElem);

//add event reaction

// turnOnBtnElem.addEventListener("click", function() {
//     lampElement.src ="./img/yellow_lamp.png"

// })

// turnOffBtnElem.addEventListener("click", function() {
//     lampElement.src = "./img/white_lamp.png"

// })

turnOnBtnElem.addEventListener("click", function () {
    console.log(turnOnBtnElem.innerHTML)
    console.log(lampElement.src)
    if (turnOnBtnElem.innerHTML === "Accendi") {
        lampElement.src = "./img/yellow_lamp.png"
        turnOnBtnElem.innerHTML = "Spegni"
    } else if (turnOnBtnElem.innerHTML === "Spegni"){
        lampElement.src = "./img/white_lamp.png"
        turnOnBtnElem.innerHTML = "Accendi"
    }

})