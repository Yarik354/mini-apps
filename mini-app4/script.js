const taskForm = document.querySelector('.taskForm');
const taskInput = document.querySelector('.taskInput');
const taskList = document.querySelector('.taskList')
const markAll = document.querySelector('.markAll')


taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskValue = taskInput.value;
    const taskElement = document.createElement('li');
    const checkBox = document.createElement('input');
    const deleteBtn = document.createElement('button');

    checkBox.type = 'checkbox';
    taskElement.innerText = taskValue;
    deleteBtn.innerText = 'X';
    taskElement.prepend(checkBox);
    taskElement.appendChild(deleteBtn);
    taskList.prepend(taskElement);
    taskInput.value = '';

    checkBox.addEventListener('change', () => {
        taskElement.classList.toggle('completed');
        if (checkBox.checked) {
            taskList.appendChild(taskElement);
        } else {
            taskList.prepend(taskElement);
        }
    })

    deleteBtn.addEventListener('click', () =>{
        taskElement.remove();
    });
})


markAll.addEventListener('click', () => {
    const tasks = document.querySelectorAll('li');
    tasks.forEach(function(task) {
        task.classList.toggle('completed');
    });
});

