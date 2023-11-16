const form = document.querySelector(".contactForm");
let newStudent = { name: "", age: "", gender: "" };

let submitSuccess;

form.addEventListener("submit", submitHandler);
function submitHandler(event) {
  event.preventDefault();

  let arryForm = Array.from(event.target);

  submitSuccess = "no-error";

  arryForm.forEach(validate);
  
  if (submitSuccess == "no-error") {
    showInHtml(newStudent);
  }
}

function validate(field) {
  if (field.nodeName === "BUTTON") return;

  field.nextElementSibling.textContent = "";

  if (field.required && !field.value) {
    field.nextElementSibling.textContent = "Feltet må ikke være tomt!";
  }

  nameInput(field);
  ageInput(field);
  genderInput(field);
}

function nameInput(field) {
  if (field.name === "fullname")
    if (!field.value) {
      // when error happens
      submitSuccess = "error";
      field.nextElementSibling.textContent = "skriv dit navn!";
    } else {
      // when no error
      newStudent.name = field.value;
    }
}

function ageInput(field) {
  if (field.name === "age") {
    if (field.value < 18 || field.value > 30) {
      // when error happens
      submitSuccess = "error";
      field.nextElementSibling.textContent = "Du skal skrive en korrekt age!";
    } else {
      // when no error
      newStudent.age = field.value;
    }
  }
}

function genderInput(field) {
  if (field.name === "sex") {
    console.log(field.value);
    if (field.value != "male" && field.value != "female") {
      // when error happens
      submitSuccess = "error";
      field.nextElementSibling.textContent =
        "Du skal select en korrekt gender!";
    } else {
      // when no error
      newStudent.gender = field.value;
    }
  }
}

// Static sutdent list
let studentData = [
  { name: "Niger afroze", age: 20, gender: "female" },
  { name: "John Doe", age: 25, gender: "Male" },
  { name: "Tom Crouse", age: 55, gender: "male" },
  { name: "Lena Holm", age: 65, gender: "female" },
  { name: "Ayash Abed", age: 3, gender: "male" },
];

studentData.forEach(showInHtml);

function showInHtml(student) {
  // Connect the UL element
  let studentList = document.getElementById("studentList");
  // create a element "li"
  let li = document.createElement("li");
  // save the text in created element

  li.innerText = `FullName: ${student.name}, Age : ${
    student.age
  } Years, Gender : ${student.gender.toUpperCase()}`;
  // now append the element as child
  studentList.appendChild(li);
}
