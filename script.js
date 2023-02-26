
function verificarFibonacci() {
    /* #########################  QUESTAO 2 ############################ */
    const numero = parseInt(document.getElementById("numero").value);
    let fibonacci = [0, 1];

    while (fibonacci[fibonacci.length - 1] < numero) {
        const proximo_valor = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(proximo_valor);
    }

    if (fibonacci.includes(numero)) {
        document.getElementById("resultado2").innerHTML = `O número ${numero} pertence à sequência de Fibonacci`;
    } else {
        document.getElementById("resultado2").innerHTML = `O número ${numero} não pertence à sequência de Fibonacci`;
    }
}

/* #########################  QUESTAO 3 ############################  */


fetch('dados.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (dados) {
        var total = 0;
        var dias = 0;
        var media = 0;
        var maior = 0;
        var auxiliar = 0;
        var menor;
        var diasMaiores = 0;

        for (var i = 0; i < dados.length; i++) {
            var variavel = dados[i].valor
            if (variavel > 0) {
                total += variavel;
                dias++;
                auxiliar = variavel;

                if (variavel > maior) {
                    maior = variavel
                }

                if (auxiliar < menor || menor == undefined) {
                    menor = auxiliar
                }
            }
            media = total / dias;
        }

        for (var i = 0; i < dados.length; i++) {
            var teste = dados[i].valor

            if (teste > media && teste > 0) {
                diasMaiores++;
            }
        }
        document.getElementById("resultado3").innerHTML =
            `O menor valor de faturamento ocorrido em um dia do mês é: ${menor.toFixed(2)} 
            <br> O maior valor de faturamento ocorrido em um dia do mês é: ${maior.toFixed(2)} 
            <br> Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${diasMaiores.toFixed(2)} 
            <br> A média mensal é: ${media.toFixed(2)}`;
    });


/* #########################  QUESTAO 4 ############################ */

const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((acc, cur) => acc + cur, 0);

const faturamentoPercentual = {};
for (const state in faturamentoPorEstado) {
    faturamentoPercentual[state] = (faturamentoPorEstado[state] / faturamentoTotal) * 100;
}

const resultado4 = document.getElementById("resultado4");
for (const state in faturamentoPercentual) {
    const porcentagem = faturamentoPercentual[state].toFixed(2);
    resultado4.innerHTML += `<p>${state}: ${porcentagem}%</p>`;
}


/* #########################  QUESTAO 5 ############################ */
function inverterString() {
    const inputString = document.getElementById("inputString5").value;

    let stringInvertida = "";

    for (let i = inputString.length - 1; i >= 0; i--) {
        stringInvertida += inputString[i];
    }

    document.getElementById("resultado5").innerHTML = stringInvertida;
}