//demonstrating JavaScript Dynamic Typing
var myVar = 0;
var myVar = true;
var myVar = null;
var myVar = undefined;
var myVar = "Steve";


//JavaScript method to alert to use of some message
alert(myVar);

//to get the input from a user in a popup box we use the prompt() method
prompt();

//console.log() method is used to log information in our browser Devtools console
console.log(myVar);

var str1 = "This is a \"simple\" string";
var str2 = "This is also a \'simple\' string";

console.log(str1);
console.log(str2);


//Creating String variables using String Object notation which  requires the NEW keyword and standard notation
var str3 = new String("Hello World");
var str4 = new String("Hello World");
var str5 = "Hello" + " " + "World";
var str6 = str3;

console.log(typeof(str3) == typeof(str4));
console.log(typeof(str3) == typeof(str5));
console.log(typeof(str3) == typeof(str6));

console.log(typeof(str3) === typeof(str4));
console.log(typeof(str3) === typeof(str5));
console.log(typeof(str3) === typeof(str6));

var school = new String("AIM Code School");

console.log(school.toString());