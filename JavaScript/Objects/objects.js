var person = {
    name: {
        first: "Bob",
        last: "Smith"
    },    
    age: 32,
    gender: 'male',
    interest: ['music', 'hiking'],
    bio: function() {
      alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interest[0] + ' and ' + this.interest[1] + '.');
    },
    greeting: function(){
      alert('Hi! I\'m' + this.name.first + '.');
    }
};

let myDataName = nameInput.value
let myDataValue = nameValue.value;

person(myDataName) = myDataValue;
  