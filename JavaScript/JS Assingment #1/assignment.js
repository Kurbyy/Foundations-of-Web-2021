//Write a program that creates a numeric,string and boolean variable.
var numeric = 8;
var string ="I love learning JavaScript";
var bool = false;

//write a progran using the variable declarations abouve that displays the data type for each variable

console.log(typeof(numericaly));
console.log(typeof(string));
console.log(typeof(bool));

//write a program that demonstrates the nature of dynamic typing in JavaScript
var dynamicVar = "a string"
var dynamicVar = 5
var dynamicVar; //undefined
var dynamicVar = null;
var dynamicVar = true;

//write a program that creates an array called todolist that holds three serparate strings

var toDoList = ["Learn JavaScript", "Practice JavaScript", "Master JavaScript"];

function toDoListLength() {
    console.log("Our to do list array has " + toDoList.length + " elements");
    console.log(toDoList(0));
    console.log(toDoList(1));
    console.log(toDoList(2));
}
toDoListLength();

//Write a program that creates an object named animal. The animal object needs to consist of 7 properties

var animal = {
    type: "Dog",
    name: "Max",
    color: "Tri-Color",
    weight: 120,
    diet: "Iams dog food",
    activities: ["run", "play fetch", "destroy stuffed animals"],
    animalSummary: function() {
        
    }
}

alert(animal.name);