let rectangle = { 
    longeur : 5,
    largeur : 5,
}

function air ( longeur , largeur ){
    return  longeur * largeur 
}

let result = air( rectangle.longeur , rectangle.largeur );
console.log(result);