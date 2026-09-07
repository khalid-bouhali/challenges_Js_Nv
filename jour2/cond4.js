const prompt = require('prompt-sync')();

let a = Number(prompt("enter a :"));
let b = Number(prompt("enter b :"));

if (a !== b) {
    console.log("a + b" , a + b );
}
else {
    console.log("(a + b)*3" , (a + b) * 3 );
}
