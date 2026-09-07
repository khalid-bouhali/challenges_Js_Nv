const prompt = require('prompt-sync')();
let a = Number(prompt("Enter a number: "));
let b = Number(prompt("Enter another number: "));

function multiplication(a , b) {
    return a * b;
}
let result = multiplication(a , b);
console.log(result);