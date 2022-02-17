document.getElementById("container").innerHTML = "This is a element with ID selector";


//todo homework - refactor and use foreach, map or other method
const collection = document.getElementsByClassName("groupOfElements");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "blue";
}


const liElements = document.getElementsByTagName("li");
for (let i = 0; i < liElements.length; i++) {
    if(i % 2 !== 0){
        liElements[i].remove();    
    } else {
        liElements[i].style.backgroundColor = "green";
    }
}


document.querySelector("#container").innerHTML = "This is a element with ID selector(querySelector)";

document.querySelector(".groupOfElements").style.backgroundColor = "yellow";


const groupCollection = document.querySelectorAll(".groupOfElements");

for (let i = 0; i < groupCollection.length; i++) {
    groupCollection[i].style.backgroundColor = "violet";
}



const liElementsQS = document.querySelectorAll("li");
for (let i = 0; i < liElementsQS.length; i++) {
    liElementsQS[i].style.backgroundColor = "indigo";
}


document.querySelector("a.active").style.backgroundColor = 'cyan';