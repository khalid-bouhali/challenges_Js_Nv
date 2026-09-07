const prompt = require('prompt-sync')();
let a = Number(prompt("Enter a number: "));
let b = Number(prompt("Enter another number: "));

function minimum (a , b){
    if(a < b) {
        return a;
    }
    else 
        return b;
}
let result = minimum(a , b);
console.log(`the minimum is ${result}`)