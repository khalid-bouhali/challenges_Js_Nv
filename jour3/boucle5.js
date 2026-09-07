const prompt = require('prompt-sync')();
let a = Number(prompt("enter a : "));
let n = 0
for( let i=1 ; i<=a ; i++){
    n += i
console.log(`${n} = ${a} = ${i}`)
}