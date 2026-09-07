const prompt = require('prompt-sync')();
let a = Number(prompt("Enter a number: "));
let b = Number(prompt("Enter another number: "));

function maximum (a , b){
    if(a > b) {
        return a;
    }
    else 
        return b;
}
let result = maximum(a , b);
console.log(`the greater is ${result}`)