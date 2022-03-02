const addTodoButton = document.getElementById("addTodoButton");
const newTodoInput = document.getElementById("newTodoInput");
const todoListContainer = document.getElementById("todoListContainer");
const emptyTodoList = document.getElementById("emptyTodoList");


const todoList = [
    "Todo 1",
    "Todo 2",
    "Todo 3"
];


const showTodoList = () => {
    if(todoList.length){
        todoListContainer.innerHTML = "";
        for (const todoItemIndex in todoList) {
            const newTodoItem = document.createElement("li");
            newTodoItem.innerHTML = todoList[todoItemIndex];
            const removeTodoButton = document.createElement("button");
            removeTodoButton.innerHTML = "x";
            removeTodoButton.addEventListener("click", () => {
                removeTodo(todoItemIndex);
                showTodoList();
            });
            newTodoItem.append(removeTodoButton);
            todoListContainer.append(newTodoItem);
        }
        emptyTodoList.style.display = "none";
        todoListContainer.style.display = "block";
    } else {
        emptyTodoList.style.display = "block";
        todoListContainer.style.display = "none";
    }
}

const addTodo = (value) => {
    todoList.push(value);
}


const removeTodo = (index) => {
    todoList.splice(index, 1);
}

document.addEventListener("DOMContentLoaded", () => {
    showTodoList();
});

addTodoButton.addEventListener("click", () => {
    addTodo(newTodoInput.value);
    showTodoList();
    newTodoInput.value = "";
})
