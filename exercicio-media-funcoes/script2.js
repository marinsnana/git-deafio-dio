function calculeIdade(anos) {
    return `Daqui a ${anos}, ${this.nome} terá ${this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: "maria",
    idade: 30,
};

const pessoa2 = {
    nome: "carla",
    idade: 26,
}

const animal = {
    nome: "fiona",
    idade: 5,
    raca: "pug"
}

// CALL
/* console.log(calculeIdade.call(pessoa2, 30)) */

// APPLY
console.log(calculeIdade.apply(pessoa2, [30]))