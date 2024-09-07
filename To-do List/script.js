document.getElementById("add-task").addEventListener("click", function () {
  const taskText = document.getElementById("new-task").value;

  if (taskText !== "") {
    const taskList = document.getElementById("task-list");

    // Crear un nuevo elemento <li>
    const newTask = document.createElement("li");
    newTask.classList.add("task-item");

    // Crear el texto de la tarea
    const taskSpan = document.createElement("span");
    taskSpan.classList.add("task-text");
    taskSpan.textContent = taskText;

    // Crear el botón de eliminación
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = 'Eliminar';

    // Agregar el texto y el botón al <li>
    newTask.appendChild(taskSpan);
    newTask.appendChild(deleteButton);

    // Agregar el <li> a la lista <ul>
    taskList.appendChild(newTask);

    // Limpiar el campo de entrada después de agregar la tarea
    document.getElementById("new-task").value = "";
  }
});

// Manejar la eliminación de tareas
document
  .getElementById("task-list")
  .addEventListener("click", function (event) {
    if (
      event.target.classList.contains("delete-button") ||
      event.target.parentElement.classList.contains("delete-button")
    ) {
      const taskItem = event.target.closest(".task-item");
      taskItem.remove(); // Eliminar el <li> de la lista
    }
  });
