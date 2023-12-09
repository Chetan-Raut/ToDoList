document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.classList.add("task-item");

            const taskTextDiv = document.createElement("div");
            taskTextDiv.classList.add("task-text");
            taskTextDiv.innerHTML = `<input type="checkbox" class="task-checkbox"><span>${taskText}</span>`;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-button");
            deleteButton.addEventListener("click", function () {
                taskItem.remove();
            });

            taskItem.appendChild(taskTextDiv);
            taskItem.appendChild(deleteButton);

            taskList.appendChild(taskItem);

            taskInput.value = "";
        }
    });

    taskList.addEventListener("change", function (event) {
        if (event.target.classList.contains("task-checkbox")) {
            const taskText = event.target.nextElementSibling;
            if (event.target.checked) {
                taskText.style.textDecoration = "line-through";
            } else {
                taskText.style.textDecoration = "none";
            }
        }
    });
});