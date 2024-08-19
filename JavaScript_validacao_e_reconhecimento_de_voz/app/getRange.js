let active = false;

function buttonDetection () {
    valor = this.firstChild.textContent

    if (!active){
        active = true;
        const inputElement = document.createElement("input");
        inputElement.type = "number";
        inputElement.id = "menor-valor";

        inputElement.addEventListener("keydown", (event) =>  {
            if (event.key === "Enter"){
                valor = inputElement.value;
                this.innerHTML = `${valor}`;
                active = false;

                if (this.id === "menor-valor"){menorValor = parseInt(valor)}
                else {maiorValor = parseInt(valor)}

                numeroSecreto = gerarNumeroAleatorio();
            }

        }) 

        inputElement.onblur = () => {
            setTimeout( () => {
                if (active) {
                    this.innerHTML = `<span>${valor}</span>`;
                    active = false;
                }
            }, 0);
        };

        this.innerHTML = "";
        this.append(inputElement)

        inputElement.focus(); 
    }
}

elementoMenorValor.addEventListener("click", buttonDetection)
elementoMaiorValor.addEventListener("click", buttonDetection)