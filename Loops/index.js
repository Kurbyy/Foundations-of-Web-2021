var limit = 5;

for(i = 1; i <= limit; i++) {
    console.log("I love JavaScript")
};

let n = 5;
//looping from 1 to 5
//in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    console.log(i)
};

let sum = 0;
let num = 100;

for(let i = 1; i <= num; i++){
    sum += i; //sum = sum + i
}

console.log("sum ", sum);

//program that check whether a number is even or odd from 1 to 20
for (var i = 1; i <= 20; i++){
    if(i % 2 === 0) {
        console.log(i + " is even")
    } else {
    console.log("----seperate-----")
    }
}

//program that multiplies 9 by every number between 0 and 10
var mulitplier = 9;
for(var i = 0; i <= 10; i++){
    var result = mulitplier * i;
    console.log(mulitplier + " * " + i + " = " + result); 
}