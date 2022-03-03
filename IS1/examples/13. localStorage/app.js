const getUserName = () => {
    return localStorage.getItem("userName");
}

const setUserName = (value) => {
    localStorage.setItem("userName", value);
}

const userNameInput = document.getElementById("userName");
const saveDataButton = document.getElementById("saveDataButton");



document.addEventListener("DOMContentLoaded", () => {
    userNameInput.value = getUserName();
});

saveDataButton.addEventListener("click", () => {
    setUserName(userNameInput.value);
})