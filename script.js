const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
addBtn.addEventListener("click", function () {
    let task = taskInput.value.trim();
    if (task === "") {
        return;
    }
    let li = document.createElement("li");
    li.innerText = task;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
    });
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });
    taskList.appendChild(li);
    taskInput.value = "";

});