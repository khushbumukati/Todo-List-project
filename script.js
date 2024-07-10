const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

addTodoBtn.addEventListener('click',addTodo);
todoInput.addEventListener('kaypress',function (e){
    if (e.kay === 'Enter'){
        addTodo();
    }
});

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;
        todoList.appendChild(li);
        todoInput.value = '';
    }
}