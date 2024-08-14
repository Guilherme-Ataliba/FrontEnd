function tocaSom(tecla) {
    document.querySelector(`#som_${tecla}`).play()
}

const listaBotoes = document.querySelectorAll('.tecla');

// O for normal é que nem o C
// for (let contador = 0; contador < max; contador++)
for (let botao of listaBotoes) {
    let classe = botao.classList[1]

    botao.addEventListener('click', function(){
        tocaSom(classe);
    });

    botao.addEventListener("keydown", function(event) {
        if (event.key === " " || event.key === "Enter"){
            botao.classList.add("ativa");
        }
        
    })

    botao.addEventListener("keyup", function() {
        botao.classList.remove("ativa");
    })

    botao.addEventListener("blur", function() {
        botao.classList.remove("ativa");
    })
};



