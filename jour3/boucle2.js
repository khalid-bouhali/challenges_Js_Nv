const prompt = require('prompt-sync')();

let a = Number(prompt("enter the number :"));
let n = 1
for( let i=1 ; i<=a ; i++) {
    n *= i
}
console.log(`the factirial of ${a} is : ${n}`)