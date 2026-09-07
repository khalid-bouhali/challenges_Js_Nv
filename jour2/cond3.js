const prompt = require('prompt-sync')();
let annualIncome = parseFloat(prompt("Enter your annual income in dollar: "));
let creditScore = parseInt(prompt("Enter your credit score /1000: "));
let loanDuration = parseInt(prompt("Enter the loan duration in years: "));
    if (annualIncome>=30000 && creditScore>=700 && loanDuration<=10 ) {
        console.log("You are eligible for the loan.");
    }
    else if (annualIncome>=30000 && creditScore>=650 && loanDuration>15 ) {
        console.log("You may be eligible for the loan with certain conditions.");
    }
   
    else (annualIncome<30000 && creditScore<650 && loanDuration>15 ); {
        console.log("You are not eligible for the loan.");
    }

