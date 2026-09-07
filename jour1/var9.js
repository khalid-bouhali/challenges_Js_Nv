const prompt = require('prompt-sync')();
let r = Number(prompt("enter le rayon: "));
const π = 3.14
let volume = (4/3) * π * r**3
console.log(`le volume est: ${volume}`);