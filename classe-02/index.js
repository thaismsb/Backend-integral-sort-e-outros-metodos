const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const maiorString = cidades.reduce((acumulador, item) => item.length > acumulador ? acumulador : item)
console.log(maiorString)