var total = 0;
total = total + 2; //console.log(total) = 2
total += 3; // total = total +3 console.log(5) total = 5;
total = total + 3
total ++ //the same thing as total = total + 1

console.log("Total is " + total);

var num1 = 0;
var num2 = 16;
var num3 = 0;
var num4 = 16;

console.log(num2 / num1);
console.log(num4 / num1);
console.log(num2 / num3);

var text = "this is a string";
var number1 = 2;

console.log(text / number1);

alert("max value " + Number.MAX_VALUE + 
    '/n Min Value ' + Number.MIN_VALUE +
    '/n Negative Infinity ' + Number.NEGATIVE_INFINITY +
    '/n Postitve Infinity ' + Number.POSITIVE_INFINITY +
    '/n NaN ' + Number.NaN
);
    
var age = 16;
if(age < 21){ //true
    console.log("Too Young to buy alcohol");
}    