const student = {
    name: "Valentina",
    faculty: "SREM",
    age: 20,
    averageMark: 9.99
};

console.log(student);

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const studentParsedJSON = JSON.parse(studentJSON);
console.log(studentParsedJSON);