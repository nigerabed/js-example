const FORM = document.querySelector(".contactForm");

FORM.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();

  let listArray = event.target;

  console.log(listArray.length);

  for (let i = 0; i < listArray.length; i=i+2) {
    console.log("sss", listArray[i]);
  }

  listArray.forEach(showItem);

showItem(listArray[0]);

  function showItem(element)  {
     console.log("sss", element);
  }

  // Array.from(event.target).forEach(validate);
}

function validate(field) {
  if (field.nodeName === "BUTTON") return;

  if (field.type === "text") {
    if (field.value === "") {
      field.nextElementSibling.textContent = "something..";
    }
  }

  //console.log(field);
}

// FORM.name.addeventListener("input", inputHandler);

// function inputHandler(event){
//     if(FORM.name.validity.typeMismatch){
//         FORM.name.setCustomValidity("hej, hallo....")
//     }else{
//         FORM.name.setCustomValidity("")
//     }
// }
