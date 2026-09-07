const prompt = require('prompt-sync')();

let x1= Number(prompt( "enter x du point A : "));
let y1 = Number(prompt("enter y du point A: "));
let z1 = Number(prompt("enter z du point A: "));
let x2 = Number(prompt( "enter x du point B: "));
let y2= Number(prompt("enter y du point B: "));
let z2 = Number(prompt("enter z du point B: "));


let distance = ("√((x2-x1)² + (y2-y1)² + (z2-z1)²)" , Math.sqrt((x2-x1)**2 + (y2-y1)**2 + (z2-z1)**2));

console.log(`the distance is:  ${distance} `);