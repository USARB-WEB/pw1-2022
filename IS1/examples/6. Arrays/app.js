const numbers = [1, 2, 3, 4];
console.log(numbers);

numbers.push(5);
console.log(numbers);

console.log(numbers.pop());
console.log(numbers);

console.log(numbers.shift());
console.log(numbers);

console.log(numbers.shift());
console.log(numbers);
console.log(numbers.shift());
console.log(numbers.shift());

console.log(numbers.unshift(...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(numbers);



console.log(numbers.slice(5, 9));
console.log(numbers.slice(-5, -1));
console.log(numbers.slice(8, 3));

console.log(numbers);
//numbers.splice(-4);
//numbers.splice(4, 6, ...[100, 101, 102]);
console.log(numbers);

let sum = 0;
for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
}
console.log(sum);

sum = 0;
let index = 0;
while (index < numbers.length) {
    sum += numbers[index];
    index++
}
console.log(sum);

sum = 0;
index = 0;
do {
    sum += numbers[index];
    index++
}while (index < numbers.length);
console.log(sum);


sum = 0;
numbers.forEach(number => {
    sum += number;
});
console.log(sum);


sum = numbers.reduce((sum, number) => sum + number)
console.log(sum);

// const squares = [];
// for (let index = 0; index < numbers.length; index++) {
//     squares.push(numbers[index]**2);
// }
// console.log(squares);

const squares = numbers.map(number => number ** 2); 
console.log(squares);


// const oddNumbers = [];
// for (let index = 0; index < numbers.length; index++) {
//     if(numbers[index] % 2 === 1){
//         oddNumbers.push(numbers[index]**2);
//     }
// }
// console.log(oddNumbers);

const oddNumbers = numbers.filter(number => number % 2 === 1);
console.log(oddNumbers);


console.log(numbers);
console.log(numbers.find(number => number === 50));
console.log(numbers.findIndex(number => number === 5));


const numerToFind = 6;
if(numbers.includes(numerToFind)){
    console.log(`Array contains value = ${numerToFind}`);
} else {
    console.log(`Array NOT contains value = ${numerToFind}`);
}

