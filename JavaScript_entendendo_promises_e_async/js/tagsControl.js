const inputTags = document.getElementById("input-tags");
const listaTags = document.getElementById("lista-tags");

const tagsDisponiveis = [
    "Front-end", "Programação", "Data Science", 
    "Full-stack", "HTML", "CSS", "JavaScript"
]

async function verificaTagsDisponiveis(tagTexto){
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(tagsDisponiveis.includes(tagTexto))
        }, 1000) 
    })
}

inputTags.addEventListener("keypress", async evento => {
    if (evento.key == "Enter"){
        evento.preventDefault()
        const tagTexto = inputTags.value.trim();
        if (tagTexto !== ""){
            try{
                const tagNova = document.createElement("li");
                const tagExiste = await verificaTagsDisponiveis(tagTexto);

                if (tagExiste){
                    tagNova.innerHTML = `<p>${tagTexto}</p> <img src="img/close-black.svg" class="remove-tag">`
                    listaTags.appendChild(tagNova);
                    inputTags.value = ""
                } else{
                    alert(`Utilize uma tag válida: ${tagsDisponiveis}`)
                }

                
            } catch {
                console.log("Erro ao acessar o servidor.")
            }
            
        } 
    }
})

listaTags.addEventListener("click", (evento) => {
    if(evento.target.classList.contains("remove-tag")){
        const tagToRemove = evento.target.parentElement;
        tagToRemove.remove()
    }
})