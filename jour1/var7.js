const prompt = require('prompt-sync')();

let a = parseInt (prompt ("enter a: "));
let b = parseInt (prompt ("enter b: "));
let c = parseInt (prompt("enter c: " ));
let moyenneGéométrique = ("(a * b * c)^(1/3)" , (a * b * c)^(1/3));

console.log(` la moyenne géométrique est: ${moyenneGéométrique} `);