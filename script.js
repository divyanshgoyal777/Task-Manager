function addtask() {
    let TaskListContainer = document.querySelector(".task-container")
    let taskInput = document.querySelector("#task-input")
    let InputValue = taskInput.value;

    // taskInput.addEventListener("keypress", (e)=>{
    //     if(e.key === "Enter"){
    //         e.preventDefault();
    //         document.getElementById("add-task-btn").click();
    //     }
    // });

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
        });

        // Create a delete button
        const deleteBtn = document.createElement('i');
        deleteBtn.className = "fa-solid fa-trash"

        // Add event listener to remove the list item
        deleteBtn.addEventListener('click', () => {
            listItem.remove();
        })

        // Create a span element for the task text
        const taskTextElement = document.createElement('span');
        taskTextElement.innerText = InputValue


        // Append elements to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(taskTextElement);
        listItem.appendChild(deleteBtn);

        TaskListContainer.appendChild(listItem);
        taskInput.value = '';

    }
}