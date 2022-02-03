/*
Corect
*/
const someFunction = (someArgument) => {
    console.log(`I am a function and I get ${someArgument}`);
}

someFunction(1);
someFunction(4);


/*
Incorect
*/
function anotherFunction(anotherArgument){
    console.log(`I am another function and I get ${anotherArgument}`);
}

anotherFunction(1);
anotherFunction(4);


/* Arrow function */

const square = number => number**2;

console.log(square(3));

for (let index = 1; index <= 10; index++) {
    console.log(index, square(index));
}
