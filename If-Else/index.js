//const number = prompt("Enter a number: ");

//if(number > 0){
    //console.log("The number is positive");
//} //else if(number == 0){
    //console.log("The number is is 0");
//}

//else{
    //console.log("The number is either a negative number or 0!");
//}

//console.log("The if..else if..else statement is easy!");


//program to assign a students grade based on the number score
var msg = "enter the percent of the student: ";

var percent = prompt(msg);

if(percent > 85){
    console.log('Grade = A ');
} else if (percent <= 85 && percent > 80) {
    console.log("Grade = A- ");
} else if(percent > 70 && percent <= 80) {
    console.log("Grade = B ");
} else if(percent > 60 && percent <= 70) {
    console.log("Grade = C ");
} else if(percent > 40 && percent <= 60) {
    console.log("Grade = D ");
} else if (percent <= 35) {
    console.log("Grade = F Student failed");
} else {
    console.log("Grade = F ");
}