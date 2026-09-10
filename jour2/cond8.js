const prompt = require('prompt-sync')();

let a = (prompt("enter a letter  :"));
if( a >= 'A' && a <= 'Z' ){
    console.log(`${a} is an uppercase character `);
}
else {
    console.log(`${a} is a lowercase character`);
}
