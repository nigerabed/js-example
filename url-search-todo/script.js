
function filterTheList(arrayList, searchString) {
  const result = arrayList.filter((item) => item.includes(searchString));
  return result;
}
 
function renderListInHtml(list, searchStr) {
  const ulElement = document.getElementById("list");
  ulElement.innerText ="";

  if (list.length == 0) {
    ulElement.innerText = "Not Found with search string=" + searchStr;
  } else {
    list.forEach((item) => {
      const liElement = document.createElement("li");
      liElement.innerText = item;
      ulElement.appendChild(liElement);
    });
  }
}

// read query params from URL
const queryParams = new URLSearchParams(location.search);
const findStr = queryParams.get("find");


const localWords = JSON.parse(localStorage.getItem("words"));


// create a new filtered list where the find string match
const findList = filterTheList(localWords, findStr);

if (findStr == null) {
  renderListInHtml(localWords, findStr);
} else {
  renderListInHtml(findList, findStr);
}




const newItemForm = document.getElementById("newItemForm");

newItemForm.addEventListener("submit", function(event){
 event.preventDefault();
 
 const newItem = document.getElementById("newItem");
 console.log(newItem.value);

 // prothome localstorage theke nite hobe or henta korbo
 const localStorageWords = JSON.parse(localStorage.getItem("words"));

// tarpor oi list er mode push korbo niew item ta . that means  newItem.value
localStorageWords.push(newItem.value);

// ai bar abar updated list ta localstorage a save korbo
 localStorage.setItem("words", JSON.stringify(localStorageWords));
 renderListInHtml(localStorageWords, "");
  
 
});

