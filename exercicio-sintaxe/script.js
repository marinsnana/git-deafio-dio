function verificador(n1, n2) {
    const frase1 = criaFrase1(n1, n2);
    const frase2 = criaFrase2(n1, n2);

    return `${frase1} ${frase2}`
}

function criaFrase1(n1, n2) {
    let igualdade = "";

    if (n1 !== n2) {
        igualdade = "não"
    }

    return `Os números ${n1} e ${n2} ${igualdade} são iguais.`
};

function criaFrase2(n1, n2) {
    const soma = n1 + n2;

    let r10 = "menor";
    let r20 = "menor";

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        r10 = "maior";
    }

    if(compara20) {
        r20 = "maior";
    }

    return `Sua soma é ${soma}, que é ${r10} que 10 e ${r20} que 20.`
}

console.log(verificador(2, 2))