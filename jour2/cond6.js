const prompt = require("prompt-sync")();

let Year = Number(prompt("enter year(s) :"));

console.log(".1 convert to months")
console.log(".2 convert to days")
console.log(".3 convert to hours")
console.log(".4 convert to minutes")
console.log(".5 convert to secondes")

let choix = Number(prompt("choose a number : "));

switch (choix) {
    case 1:
        console.log( Year * 12 );
        break;
    case 2:
        console.log( Year * 365);
        break;
    case 3:
        console.log( Year * 8760);
        break;
    case 4:
        console.log( Year * 525600);
        break;
    case 5:
        console.log( Year * 31536000);
        break;
    default:
    console.log("choice invalide")
}