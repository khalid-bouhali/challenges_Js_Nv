const prompt = require('prompt-sync')();

let n = Number(prompt("Enter your number  :"));

function countDown(n){
    for( let i=n ; i >= 0 ; i--){
        console.log(i);
    }
}
countDown(n)
