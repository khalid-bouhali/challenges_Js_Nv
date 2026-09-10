const prompt = require ('prompt-sync')();

let Books = []
function add(){
    let title = prompt("Enter Title  :");
    let writer = prompt("Enter Writer  :");
    let price = prompt("Enter Price  :");
    let quantity = prompt("Enter Quantity  :");
        let book ={
            title : title,
            writer : writer,
            price : price,
            quantity : quantity
        };
}
























console.log(`
    1. Ajouter un Livre au Stock
    2. Afficher Tous les Livres Disponibles
    3. Mettre à Jour la Quantité d'un Livre
    4. Supprimer un Livre du Stock
    5. Afficher le Nombre Total de Livres en Stock`)

let choix = Number(prompt(" Choose from the list above  :"));

switch(choix){
    case 1:
        console.log(add)
    case 2:
        console.log()
    case 3:
        console.log()
    case 4:
        console.log()
    case 5:
        console.log()
    default:
        console.log("choice not availibale!")
}

function add(){
    let title = prompt( "enter the title :")
    let writer = prompt( "enter the Writer :")
    let price = prompt( "enter the price :")
    let quantity = prompt( "enter the Quantity :")
    console.log(`
        -Title :${title}
        -Writer : ${writer}
        -Price : ${price}
        -Quantity : ${quantity}
    `)
}
add()