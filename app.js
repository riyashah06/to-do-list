document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Add a task
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
                <button class="edit">Edit</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";

            // Delete a task
            const deleteButton = li.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(li);
            });

            // Edit a task
            const editButton = li.querySelector(".edit");
            editButton.addEventListener("click", function () {
                const newTaskText = prompt("Edit task:", taskText);
                if (newTaskText !== null) {
                    li.querySelector("span").textContent = newTaskText;
                }
            });
        }
    });
});