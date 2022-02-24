


const addTaskBtn = document.getElementById('add-task-btn');
const deskTaskInput = document.getElementById('description-task');
const todosWrapper = document.querySelector('.todos-wrapper');

// обьявляем массив в который сохраняем наши задачи на день
let tasks;
!localStorage.tasks? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'))
//  создаем функцию конструктор для задач
function Task(description) {
    this.description = description;
    this.completed = false;
}
// создаём функцию для сохранения наших данных в localstorage
const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
// вешаем обработчик событий на кнопку, при клике текст из импута передаём в конструктор и результат сохраняем в массив tasks 
addTaskBtn.addEventListener('click', () => {
    tasks.push(new Task(deskTaskInput.value))
    console.log(tasks)
    updateLocal()
})