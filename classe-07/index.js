const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
]
const filtrandoIdadeDesejada = usuários.filter(usuario => usuario.idade >= 18 && usuario.idade <= 65);
const filtrandoHabilitacao = filtrandoIdadeDesejada.every(x => x.habilitado);

if (!filtrandoHabilitacao) {
    console.log("Todos precisam estar habilitados.")
} else {
    console.log("Todos passaram no teste.")
};
