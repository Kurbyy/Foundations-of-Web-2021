let n = 100

for(let i = 1; i <= n; i++) {
    console.log(i)
}

let sum = 0;
let num = 100;

for(let i = 1; i <= num; i++) {
    sum += i; 
}
console.log("sum", sum);

for(var i = 1; i <= 100; i++) {
    if(i % 3 === 0) {
        console.log(i + "Fizz")
    } else {
        console.log(i + "Buzz")
    }
}