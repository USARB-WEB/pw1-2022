const number = 3;

let single = 'single-quoted ${number}';
let double = "double-quoted ${number}";

let backticks = `backticks ${number}`;

console.log("single quoted:", single);
console.log("double quoted:", double);
console.log("backticks:", backticks);

const persons = `
 First 
 Second
 Third
`;
console.log(persons);


//alert( "\u{1F60D}" );


const str = `Hello`;
console.log(str);
console.log(str[1]);
console.log(str.charAt(1));

console.log(str.toLowerCase());
console.log(str.toUpperCase());



const sentence = "Hello I am a JavaScript code. I think that JS is the beest of the best programming language";
console.log(sentence);

const words = sentence.split(" ");
console.log(words);


const newSentence = words.join(" ");

console.log(newSentence);

const numbersAsString = "1,2,3,4,5";
console.log(numbersAsString.split(",").join(";"));
//1;2;3;4;5
