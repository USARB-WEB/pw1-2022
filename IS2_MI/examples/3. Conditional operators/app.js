/*
alert("Hello. My name is JS");
const userName = prompt("What is your name");
alert(`Hello ${userName}`);

const likeJS = confirm("Do you like JS?");

if(likeJS){
    alert("Great. You can choose frontend dev");
} else {
    alert("You can try backend or something else");
}
*/

const digit = Number(prompt("Input a digit"));

switch (digit) {
    case 0:
        alert("Zero");
        break;
    case 1:
        alert("One");
        break;
    case 2:
        alert("Two");
        break;
    case 3:
        alert("Three");
        break;
    case 4:
        alert("Four");
        break;
    case 5:
        alert("Five");
        break;
    case 6:
        alert("Six");
        break;
    case 7:
        alert("Seven");
        break;
    case 8:
        alert("Eight");
        break;
    case 9:
        alert("Nine");
        break;
    case 0:
        alert("Ten");
        break;
    default:
        alert("This is not a digit");
}