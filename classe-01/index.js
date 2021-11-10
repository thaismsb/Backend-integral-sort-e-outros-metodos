const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

numeros.sort((a, b) => a - b)
console.log(numeros)
numeros.sort((a, b) => b - a)
console.log(numeros)
numeros.sort()
console.log(numeros)

frutas.sort((a, b) => a.localeCompare(b))
console.log(frutas)
frutas.sort((a, b) => b.localeCompare(a))
console.log(frutas)
frutas.sort((a, b) => a.length - b.length)
console.log(frutas)