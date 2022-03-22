Vue.createApp({
    data() {
        return {
            message: 'Hello from Vue!',
            name: "",
            x: 4,
            y: 2,
            students: [
                {
                    name: "Mihai",
                    age: 12,
                    salary: 1234
                },
                {
                    name: "Ion",
                    age: 33,
                    salary: 3333
                }
            ],
            isWeekend: true,
            number: 0,
            appBackgroundColor: "white"
        }
    },
    watch: {
        appBackgroundColor() {
            alert(`Color changed to ${this.appBackgroundColor}`)
        }
    },
    computed: {
        sum(){
            return this.x + this.y;
        },
        totalSalary(){
            return this.students.reduce((sum, student) => sum + student.salary, 0)
        },
        reversedName(){
            return this.name.split("").reverse().join("");
        }
    },
    methods: {
        changeBackgroudColorToRed(){
            alert("Red selected")
            this.appBackgroundColor = "red";
        },
        changeBackgroudColorToGreen(){
            this.appBackgroundColor = "green";
        },
        changeBackgroudColorToBlue(){
            this.appBackgroundColor = "blue";
        }
    }
}).mount('#app')