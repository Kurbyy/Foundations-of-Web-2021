function sum(a, b) {
    console.log(this === window); // => true
    this.myNumber = 20; // add 'myNumber' property to global object
    return a + b;
  }

  console.log(sum(15, 16));
  console.log(window.myNumber);


  

  function multiply(a, b){
      'use strict' //enables strict mode for better securit and error checking
      console.log(this === undefined); //true
      console.log(this === window); //false due to strict mode
      return a = b;
  }

  console.log(multiply(2, 5));

  function execute(){
      'use strict';

      function concat(str1,str2){
          //the strict mode is enavled here as well
          console.log(this === undefined) //true
          return str1 + str2
      }

      console.log(concat("Hello", "World"));
  }

  execute();

function nonStrictSum(a,b){
    //non strict mode
    console.log(this === window) //true
    return a + b
}

function strictSum(a,b){
    'use strict'
    //strict mode is now enabled
    console.log(this === window) //false
    return a + b
}

console.log(nonStrictSum(5, 6));
console.log(strictSum(8, 12));
  