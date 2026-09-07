const prompt = require('prompt-sync')();
let letter = prompt("enter a letter:").toLowerCase();

switch(letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'y':
        console.log("the letter is a vowel");
        break;
    default:
        console.log("the letter is a consonant");
}