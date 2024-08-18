const btnAdicionarTarefa = document.querySelector(".app__button--add-task");
const formAdicionarTarefa = document.querySelector(".app__form-add-task");
const textArea = document.querySelector(".app__form-textarea");
const ulTarefas = document.querySelector(".app__section-task-list");
const btnCancelarTarefa = document.querySelector(".app__form-footer__button--cancel")
const paragrafoDescricaoTarefa = document.querySelector(".app__section-active-task-description");
const btnRemoverConcluidas = document.querySelector("#btn-remover-concluidas")
const btnRemoverTodas = document.querySelector("#btn-remover-todas")

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
let tarefaSelecionada = null;
let liTarefaSelecionada = null;

// Tarefas
function atualizarTarefa () {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function limparFormulario(){
    textArea.value = ""
    formAdicionarTarefa.classList.toggle("hidden");
}

function criarElementoTarefa (tarefa) {
    const li = document.createElement("li");
    li.classList.add("app__section-task-list-item")

    const svg = document.createElement("svg");
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    `

    const paragrafo = document.createElement("p");
    paragrafo.classList.add("app__section-task-list-item-description");
    paragrafo.innerText = tarefa.descricao;

    const button = document.createElement("button");

    button.onclick = function () {
        novaDescricao = prompt("Novo nome para a tarefa:")
        
        if (novaDescricao) {
            paragrafo.innerText = novaDescricao
        
            /* JS appears to maintain the address of elements added to an array, not a copy of them. Changing tarefa here will change the memory value the array tarefas is looking at. */
            tarefa.descricao = novaDescricao
            atualizarTarefa();
        }
        
    }

    const img = document.createElement("img");
    
    button.classList.add("app_button-edit")
    img.setAttribute("src", "imagens/edit.png");
    button.append(img)

    li.append(svg)
    li.append(paragrafo)
    li.append(button)

    if (tarefa.completa){
        li.classList.add("app__section-task-list-item-complete")
        button.setAttribute("disabled", "disabled")
    }
    else{
        li.onclick = function () {
            if (tarefa.completa){return}

            // Using querySelectorAll with forEach doesnt raise error if null is found
            if (tarefaSelecionada != tarefa){
                document.querySelectorAll(".app__section-task-list-item-active")
                .forEach(elemento => {
                    elemento.classList.remove("app__section-task-list-item-active")
                })
            }
            
                    
            if (li.classList.toggle("app__section-task-list-item-active")){
                paragrafoDescricaoTarefa.innerText = tarefa.descricao;
                tarefaSelecionada = tarefa;
                liTarefaSelecionada = li;
            }
            else{
                paragrafoDescricaoTarefa.innerText = "";
                tarefaSelecionada = null;
                liTarefaSelecionada = null;
            }
            
            
        }
    }

    return li;
}

function addElementoTarefa (tarefa) {
    const elementoTarefa = criarElementoTarefa(tarefa);
    ulTarefas.append(elementoTarefa);
}

btnAdicionarTarefa.addEventListener("click", function () {
    formAdicionarTarefa.classList.toggle("hidden");
})

formAdicionarTarefa.addEventListener("submit", function (evento){
    evento.preventDefault();

    const tarefa = {
        descricao: textArea.value,
        completa: false
    }
    tarefas.push(tarefa);
    atualizarTarefa();
    
    addElementoTarefa(tarefa);
    limparFormulario();
})

// Cancelar
btnCancelarTarefa.addEventListener("click", limparFormulario);

// Evento Concluído
document.addEventListener("FocoFinalizado", function () {
    if(tarefaSelecionada){
        liTarefaSelecionada.classList.remove("app__section-task-list-item-active")
        liTarefaSelecionada.classList.add("app__section-task-list-item-complete")
        liTarefaSelecionada.querySelector("button").setAttribute("disabled", "disabled")
        tarefaSelecionada.completa = true;
        atualizarTarefa()
    }
})

// Menu Removendo
function removerTarefas (somentoCompletas){
    const seletor = somentoCompletas ? ".app__section-task-list-item-complete" : ".app__section-task-list-item"

    document.querySelectorAll(seletor).forEach(elemento => {
        elemento.remove()
    })
    tarefas = somentoCompletas ? tarefas.filter(tarefa => !tarefa.completa) : []
    atualizarTarefa()
}
    
btnRemoverConcluidas.addEventListener("click", function () {removerTarefas(true)})
btnRemoverTodas.addEventListener("click", function () {removerTarefas(false)})

// Main
tarefas.forEach(tarefa => {
    addElementoTarefa(tarefa);
})

