let randomArr = ["Abed", "Niger", "Arshi", "Siraat", "Ayash", 1, 2];
console.log("sort random array: ",randomArr.sort());
console.log("reverse random array: ",randomArr.reverse());


let nameArr = [
  { name: "Abed", age: 40, gender: "male" },
  { name: "Niger", age: 33, gender: "female" },
  { name: "Arshi", age: 9, gender: "female" },
  { name: "Siraat", age: 7, gender: "female" },
  { name: "Ayash", age: 2, gender: "male" },
];

nameArr.forEach(function (person) {
  person.name = modifyName(person);
  //   if (person.gender === "male") {
  //     person.name = "Mr " + person.name;
  //   }

  //   if (person.gender === "female") {
  //     person.name = "Ms " + person.name;
  //   }
});

console.log("full array: ",nameArr);

function modifyName(person) {
  if (person.gender === "male") {
    return "Mr " + person.name;
  }

  if (person.gender === "female") {
    return "Ms " + person.name;
  }
}

nameArr.forEach(function (person) {
  console.log(person.name);
});

const lastIndex = nameArr.length - 1;
console.log("Showing name by last index: ",nameArr[lastIndex].name);
