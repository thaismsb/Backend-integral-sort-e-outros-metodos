const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const temItemProibido = palavras.some(x => {

    if (x === "cerveja" || x === "vodka") {
        return true;
    } else {
        return false;
    }

});

if (temItemProibido) {
    console.log("Revise sua lista, joão. possui bebida com venda proibida!")
} else {
    console.log("Tudo certo, vamos as compras!")
}

