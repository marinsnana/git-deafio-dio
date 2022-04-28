const alunos = [
    {
        nome: "joão",
        nota: 5,
        turma: "1B",
    },

    {
        nome: "sofia",
        nota: 9,
        turma: "1B",
    },

    {
        nome: "paulo",
        nota: 6,
        turma: "2C",
    },

    {
        nome: "miguel",
        nota: 3,
        turma: "2C",
    },
];

function alunosAprovados(array, media) {
    let aprovados = [];

    for(let i = 0; i < array.length; i++) {

        const {nota, nome} = array[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));