const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];

const temPalavraInvalida = palavras.some(x => x.length > 5);

if (temPalavraInvalida) {
    console.log("Existe palavra inválida!");
} else {
    console.log("Array validado.");
}