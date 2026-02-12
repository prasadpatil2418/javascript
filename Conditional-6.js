//if statement
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
//output You are eligible to vote.

//if else statement
let num = 10;
if (num % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
//output Even number

//if else if statement
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}
//output Grade: B


//switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
    default:
        console.log("Invalid day");

}
//output Wednesday

