let prompt = require('prompt-sync')()
//let input = prompt('Please select a valid option. \n 1. ADD \n 2.Subract 3.').toUpperCase
let num1 = prompt("Enter the first number")
let num2 = prompt('enter the second number')
let calculator = num1 - num2

switch (calculator) {
    case 'ADD' || '1':

            console.log(num1+num2);//call add function to do calculation inside function.no console.log
        break;
    case 'SUBTRACT':

        console.log(num1 - num2);
        break;
    case 'MULTIPLY':

        console.log(num1*num2);
        break;
    case 'DIVIDE':

        console.log(num1/num2);
        break;
    case 'EXIT':
        console.log("exiting...");
        break;
    default:
        console.log("your entry is invalid, try again later");
}