function leite(din=0)  { //Usando parâmetros opcionais

    if (din > 8.50) {
        return 'comprei o leite';
    }
    else {
        return 'não comprei o leite';
    }
}

let comp = leite(7)

console.log(comp)

var varrer = function(con) {
    if (con) {
        return 'Varrer'
    }
    else {
        return 'Não varrer'
    }
}

console.log(varrer(false))

