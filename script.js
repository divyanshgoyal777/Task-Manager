// Function to add task
function addtask() {
    let TaskListContainer = document.querySelector(".task-container")
    let taskInput = document.querySelector("#task-input")
    let InputValue = taskInput.value;

    if (InputValue !== '') {

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.className = "all-task";

        // Create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = "checkbox"

        // Add event listener to toggle strikethrough effect
        checkbox.addEventListener('change', () => {
            taskTextElement.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
            updateLocalStorage();
        });

        // Create a delete button
        const deleteBtn = document.createElement('i');
        deleteBtn.className = "fa-solid fa-trash"

        // Add event listener to remove the list item
        deleteBtn.addEventListener('click', () => {
            listItem.remove();
            updateLocalStorage();
        })

        // Create a span element for the task text
        const taskTextElement = document.createElement('span');
        taskTextElement.innerText = InputValue;

        // Append elements to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(taskTextElement);
        listItem.appendChild(deleteBtn);

        TaskListContainer.appendChild(listItem);
        taskInput.value = '';

        // Update local storage
        updateLocalStorage();
    }
}

// Function to update local storage
function updateLocalStorage() {
    const tasks = [];
    const taskElements = document.querySelectorAll('.all-task');

    taskElements.forEach((taskElement) => {
        const taskText = taskElement.querySelector('span').innerText;
        const isCompleted = taskElement.querySelector('.checkbox').checked;
        tasks.push({ text: taskText, completed: isCompleted });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage on page load
function loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
        const tasks = JSON.parse(storedTasks);

        tasks.forEach((task) => {
            const listItem = document.createElement('li');
            listItem.className = 'all-task';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'checkbox';
            checkbox.checked = task.completed;

            checkbox.addEventListener('change', () => {
                taskTextElement.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
                updateLocalStorage();
            });

            const deleteBtn = document.createElement('i');
            deleteBtn.className = 'fa-solid fa-trash';

            deleteBtn.addEventListener('click', () => {
                listItem.remove();
                updateLocalStorage();
            });

            const taskTextElement = document.createElement('span');
            taskTextElement.innerText = task.text;

            // Apply initial styling based on completion status
            taskTextElement.style.textDecoration = task.completed ? 'line-through' : 'none';

            listItem.appendChild(checkbox);
            listItem.appendChild(taskTextElement);
            listItem.appendChild(deleteBtn);

            document.querySelector('.task-container').appendChild(listItem);
        });
    }
}

// Load tasks from local storage on page load
window.onload = loadTasksFromLocalStorage;
