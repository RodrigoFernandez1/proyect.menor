const addTaskButton = document.getElementById("add-task");
const newTaskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

// Funcion para agregar una nueva tarea
function addTask() {
  const taskText = newTaskInput.ariaValueMax.trim();

  //validar que el input no este vacio
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // creacion del boton de eliminar tarea
    const deleteButton = document.createElement("button"); //crea un nuevo boto
    deleteButton.textContent = "Eliminar"; // Pone Testo al boton
    deleteButton.className = "delete-task"; // agrega una clase al boton para poder darle estilos
    deleteButton.onclick = function () {
      // agrega un avento al hacer clic
      taskList.removeChild(taskItem); //elimina la tarea de la lista cuando se hace clic en el boton
    };

    // agregamos el boton para aliminar
    taskItem.appendChild(deleteButton);

    // agregamos la tarea con el boton a la lista de tareas
    taskList.appendChild(taskList);

    // se limpia el campo de entrada despues de agregar la tarea
    newTaskInput.value = "";
  }
}

// pongo un evento  listaner al boton para agregar tareas  para que ejecute la funcion assTask al hacer clic
addTaskButton.addEventListener("click", addTask);

document.getElementById("add-task").addEventListener("click", function () {
  const taskText = document.getElementById("new-task").value;

  if (taskText !== "") {
    const taskList = document.getElementById("task-list");

    // Crear un nuevo elemento <li>
    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    // Crear un botón de eliminación y agregarlo al <li>
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-task"); // Asegúrate de que el botón tiene la clase correcta

    // Agregar el botón al <li>
    newTask.appendChild(deleteButton);

    // Agregar el <li> a la lista <ul>
    taskList.appendChild(newTask);

    // Limpiar el campo de entrada después de agregar la tarea
    document.getElementById("new-task").value = "";

    // Evento para eliminar la tarea
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(newTask);
    });
  }
});
