document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".input");
  const addButton = document.querySelector(".add");
  const list = document.querySelector(".list");

  addButton.addEventListener("click", () => {
    const taskName = input.value.trim();
    if (taskName) {
      addTask(taskName);
      input.value = "";
    }
  });

  list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      e.target.parentElement.remove();
    } else if (
      e.target.classList.contains("task") ||
      e.target.classList.contains("task-name")
    ) {
      const task = e.target.closest(".task");
      task.classList.toggle("completed");
    }
  });

  function addTask(taskName) {
    const task = document.createElement("li");
    task.classList.add("task");
    task.innerHTML = `
            <span class="task-name">${taskName}</span>
            <button class="delete">Delete</button>
        `;
    list.appendChild(task);
  }
});
