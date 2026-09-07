const prompt = require("prompt-sync") ();
let a = parseInt(prompt("enter the value of a :"));
let b = parseInt( prompt("enter the value of b :"));
let c = parseInt(prompt("enter the value of c:"));
let D = b** - 4 * a * c
console.log (` Delta equales : ${D}`)
if( D > 0 ) {
    let x1 = -b + Math.sqrt(D) / 2 * a
    let x2 = -b - Math.sqrt(D) / 2 * a
console.log(`The equation has two solutions : x1 :${x1} and x2 :${x2}`)
}
else if( D == e ) {
    let x0 = -b / (2 * a)
console.log(` the equation has one solution : ${x0} `)
}
else {
console.log(" the equation has no solution")
}