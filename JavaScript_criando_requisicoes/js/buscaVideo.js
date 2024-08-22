import { conectaApi } from "./conectaAPI.js";
import { mostrarVideos } from "./mostrarVideos.js";

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");

async function buscaVideo(evento){
    evento.preventDefault();
    const lista = document.querySelector("[data-lista]")

    const dadosPesquisa = document.querySelector("[data-pesquisa]");
    const busca = await conectaApi.buscaVideo(dadosPesquisa.value);

    lista.innerHTML = ""
    // while (lista.firstChild){
    //     lista.removeChild(lista.firstChild)
    // }

    busca.forEach(element => {
        lista.appendChild(mostrarVideos.constroiCard(
            element.titulo, element.descricao, 
            element.url, element.imagem
        ))
    });

    if (busca.length == 0){
        lista.innerHTML = `
            <h2 class="mensagem__titulo"> Não existem vídeos com esse termo</h2> 
        `
    }   
}

botaoPesquisa.addEventListener("click", evento => buscaVideo(evento))