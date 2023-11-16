

let form = document.getElementById("todo-form");
form.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();

  let arryForm = Array.from(event.target);
  arryForm.forEach(validate);
}

function validate(field) {
    if (field.nodeName === "BUTTON") return;
  field.nextElementSibling.textContent = "";

  if (field.name === "todo-task") {
    if (field.value == "") {
      field.nextElementSibling.textContent = "Feltet må ikke være tomt!";
    }else{
        addTask(field.value);
        field.value = "";
    }
  }
}

function addTask(task) {
  // Connect the UL element
  let addtaskUl = document.getElementById("taskList");
  // create a element "li"
  let li = document.createElement("li");
  // save the text in created element

  li.innerText = task;
  // now append the element as child
  addtaskUl.appendChild(li);
}

