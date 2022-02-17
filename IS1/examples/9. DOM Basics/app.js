const containerElement = document.getElementById("container");
containerElement.innerHTML = "Hello from JS";
containerElement.style.color = "red";
containerElement.addEventListener("click", () => {
    const buttonElement = document.createElement("button");
    buttonElement.innerHTML = "I am a Button created from JS";
    buttonElement.id = "button";
    buttonElement.addEventListener("click", () => {
        document.getElementById("button").remove();
    });
    document.body.appendChild(buttonElement);
});