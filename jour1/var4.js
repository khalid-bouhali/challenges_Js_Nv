const prompt = require('prompt-sync')();

let vitesseKmH = parseFloat(prompt("Entrer la vitesse en Km/h : "));
let vitesseMs = vitesseKmH * 0.27778;

console.log(`${vitesseKmH} km/h correspond à ${vitesseMs} m/s`);