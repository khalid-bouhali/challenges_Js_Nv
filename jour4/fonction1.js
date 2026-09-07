const prompt = require('prompt-sync')();
let a = Number(prompt("Enter a number: "));
let b = Number(prompt("Enter another number: "));

function add(a , b) {
    return a + b
}
let result = add(a , b) ;
console.log(result);