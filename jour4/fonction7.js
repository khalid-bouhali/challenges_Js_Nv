const prompt = require('prompt-sync')();

let n = Number(prompt("Enter your number  :"));

function pairité(n){
    if( n %2 == 0 ){
        console.log(true)
    }
    else(
        console.log(false)
    )
}
pairité(n)