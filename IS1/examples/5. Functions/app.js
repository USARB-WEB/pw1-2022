//Incorct definition for function
function incorectDefinition(parameter){
    console.log(`This is incorect definition of function with parameter = ${parameter}`);
}


incorectDefinition(2);
incorectDefinition(5);


//Corrct definition for function
const correctDefinitonOfFunction = (parameter) => {
    console.log(`This is CORECT definition of function with parameter = ${parameter}`);
}

correctDefinitonOfFunction(2);
correctDefinitonOfFunction(6);

//Arrow function (expresion)
const square = number => number**2;

for (let index = 1; index < 100; index++) {
    console.log(index, square(index));
}