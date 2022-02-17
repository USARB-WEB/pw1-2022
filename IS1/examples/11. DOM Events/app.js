document.addEventListener("DOMContentLoaded", () => {
    document.body.style.backgroundColor = "yellow";
});


const firstButton = document.getElementById("firstButton");
const eventListenerConsole = document.getElementById("eventListenerConsole");

firstButton.addEventListener("click", () => {
    eventListenerConsole.innerHTML = "Click";
});

firstButton.addEventListener("dblclick", () => {
    eventListenerConsole.innerHTML = "Double click";
});

firstButton.addEventListener("mouseover", () => {
    eventListenerConsole.innerHTML = "Mouse over";
});

firstButton.addEventListener("mouseout", () => {
    eventListenerConsole.innerHTML = "Mouse out";
});

const firstInput = document.getElementById("firstInput");


firstInput.addEventListener("keydown", () => {
    eventListenerConsole.innerHTML = "Key down";
});

firstInput.addEventListener("keyup", () => {
    eventListenerConsole.innerHTML = "Key up";
});

firstInput.addEventListener("keypress", () => {
    eventListenerConsole.innerHTML = "Key pressed";
});

firstInput.addEventListener("change", () => {
    eventListenerConsole.innerHTML = "Input changed";
});

firstInput.addEventListener("focus", () => {
    eventListenerConsole.innerHTML = "Focused input";
    firstInput.value = "You focused me. Thx";
});

firstInput.addEventListener("blur", () => {
    eventListenerConsole.innerHTML = "Blur input";
    firstInput.value = "";
});


setTimeout(() => {
    document.body.style.backgroundColor = "orange";
}, 3000)


const colors = ["red", "green", "blue", "pink", "black", "yellow"];
let selectedColorIndex = 0;

setInterval(() => {
    document.body.style.backgroundColor = colors[selectedColorIndex];
    if(selectedColorIndex < colors.length){
        selectedColorIndex++;
    } else {
        selectedColorIndex = 0;
    }
}, 1)
