const prompt = require('prompt-sync')();
const temperature = Number(prompt('Entrez la température en Celsius : '));
if (temperature < 0) {
    console.log("solide");
} else if (temperature >= 0 && temperature < 100) {
    console.log("liquide");
} else {
    console.log("gazeux");
}