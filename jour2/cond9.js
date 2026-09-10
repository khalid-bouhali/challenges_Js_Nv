const prompt = require('prompt-sync')();

let n = Number(prompt(" Enter your grade  :"));
if( n < 10 ){
    console.log("recalé");
}
else if( n >= 10 && n <= 12){
    console.log("Passable");
}
else if(n > 12 && n <= 14){
    console.log("Assez bien");
}
else if( n > 14 && n <= 16){
    console.log("Bien");
}
else{
    console.log("Très bien");
}
