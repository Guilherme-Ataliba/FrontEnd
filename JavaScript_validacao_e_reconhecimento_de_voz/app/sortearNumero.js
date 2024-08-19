// Alterando Maior e Menor Valor =======================================
let menorValor = 1;
let maiorValor = 10;
const elementoMenorValor = document.querySelector("#menor-valor");
const elementoMaiorValor = document.querySelector("#maior-valor");

elementoMenorValor.firstChild.textContent = menorValor
elementoMaiorValor.firstChild.textContent = maiorValor

// Gerando Número Secreto ==============================================
function gerarNumeroAleatorio () {
    return Math.floor(Math.random() * (maiorValor - menorValor + 1))+  menorValor
}

let numeroSecreto = gerarNumeroAleatorio()
