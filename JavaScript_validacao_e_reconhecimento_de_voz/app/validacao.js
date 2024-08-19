const elementoChute = document.getElementById("chute")
const elementoChuteMensagem = document.getElementById("chute-mensagem")

function verificaChute (chute) {
    const numero = +chute //Converte para inteiro
    elementoChute.classList.remove("disabled")

    if (Number.isNaN(numero)){
        elementoChuteMensagem.textContent = "Valor Inválido."
        return
    }

    if (numero < menorValor || numero > maiorValor){
        elementoChuteMensagem.textContent = `Valor Inválido: O número secreto precisa estar entre
            ${menorValor} e ${maiorValor}.`;
        return
    }

    if (numero === numeroSecreto){
        localStorage.setItem("numeroVitoria", `${numero}`);

        setTimeout(() => {
            window.location.href = "win.html"
        }, 10)
        
    } else if (numero > numeroSecreto){
        elementoChuteMensagem.innerHTML = `O número secreto é menor <i class="fa-solid fa-circle-chevron-down"></i>`
    }
    else {
        elementoChuteMensagem.innerHTML = `O número secreto é maior <i class="fa-solid fa-circle-chevron-up"></i>`
    }

}