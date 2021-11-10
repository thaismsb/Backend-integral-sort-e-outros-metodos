const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];


const maiorValor = numeros.reduce((contador, item) => item > contador ? item : contador);
console.log(maiorValor);