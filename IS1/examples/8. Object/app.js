const personArray = [
    "Ion",
    "Ciobanu",
    33,
    "+3731992345",
    9.99,
    "Chisinau",
];

console.log(personArray);
console.log(personArray[1]);


const personObject = {
    name: "Ion",
    surname: "Ciobanu",
    age: 33,
    phone: "+3731992345",
    averageMark: 9.99,
    city: "Chisinau"
};
console.log(personObject.age);
console.log(personObject);


const person = {
    name: "Ion",
    surname: "Ciobanu",
    age: 33,
    contacts: {
        phone: "+3731992345",
        email: "ion.creanga@usarb.md"
    },
    averageMark: 9.99,
    city: "Chisinau"
};

console.log(person.contacts.phone);
console.log(person);

const employees = [
    {
        name: "Ion",
        salary: 1000
    },
    {
        name: "Ana",
        salary: 4000
    },
    {
        name: "Mihai",
        salary: 3000
    },
    {
        name: "Elena",
        salary: 5000
    }
];

console.log(employees);


let sum = 0;
for (const employee of employees) {
    sum += employee.salary;
}
console.log(sum);


const salarySum = employees.reduce((sum, employee) => sum + Number(employee.salary), 0);
console.log(salarySum);


console.log(employees.filter(employee => employee.salary >= 4000));


employees.splice(0, employees.length, employees.map(employee => {
    return {
        name: employee.name,
        salary: employee.salary + 100
    }
}))
console.log(employees);