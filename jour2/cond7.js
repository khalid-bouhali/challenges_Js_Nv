const prompt = require('prompt-sync')();

let a = Number(prompt("enter a number  :"));
if( a < 0 ){
    console.log(`${a} is negtive`);
}
else if( a > 0 ){
    console.log(`${a} is positive`);
}
else 
    console.log(`${a} is null`)

