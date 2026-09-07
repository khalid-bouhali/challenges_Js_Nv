const prompt = require('prompt-sync')();

let distanceKm = parseFloat(prompt("Entrez la distance en km :"));

let distanceYard = distanceKm * 1093.61;

console.log(`${distanceKm} km correspond à ${distanceYard} yards`);