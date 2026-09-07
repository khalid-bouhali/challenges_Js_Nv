const prompt = require( "prompt-sync") ();

let length =parseInt(prompt("enter length: "));
let width =parseInt(prompt("enter width: "));
let surface = ( length * width );

console.log(` the result is: ${surface}`)