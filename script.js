
//preleva img

const offLamp = document.getElementById("white-lamp");
console.log(offLamp);

const onLamp = document.getElementById("yellow-lamp");
console.log(onLamp);

//preleva btn

const offBtnElem = document.getElementById("turnon-btn");
console.log(offBtnElem);

const onBtnElem = document.getElementById("turnoff-btn");
console.log(onBtnElem);

//add event reaction

offBtnElem.addEventListener("click", function() {
    onLamp.classList.add("active");

})

onBtnElem.addEventListener("click", function(){
    offLamp.classList.remove("active");

})