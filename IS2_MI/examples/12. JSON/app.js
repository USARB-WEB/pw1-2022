const person = {
    name: "Ion",
    age: 123,
    salary: 321
};

console.log(person);

const personJSON = JSON.stringify(person);
console.log(personJSON);

const personJSONParsed = JSON.parse(personJSON);
console.log(personJSONParsed);