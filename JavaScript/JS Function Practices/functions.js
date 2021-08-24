//a function without any parameters
function greeting(){
    alert("hello world");
}
greeting();

//function with two params
function displayName(first,last){
    alert("hello " + first + " " + last + "!");
}

displayName(8, 7);

var displayName =["first", "last"]

//a function returning another functions
function multiple(x){
    function  fn(y){
        return x + y;
    }
    return fn;
}

var triple = multiple(3);
triple(2);
triple(3)



