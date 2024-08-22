const containerVideos = document.querySelector(".videos__container")

async function buscarEMostrarVideos(){

    try {
        const busca = await fetch("http://localhost:3000/videos");
        const videos = await busca.json();

        videos.forEach((video) => {

            if (video.categoria === ""){
                throw new Error("Video não tem categoria");
            }

            containerVideos.innerHTML += `
                <li class="videos__item" >
                    <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                        <img class="img-canal" src="${video.imagem}" alt="Logo no canal">
                        <h3 class="titulo-video">${video.titulo}</h3>
                        <p class="titulo-canal">${video.descricao}</p>
                        <p class="categoria" hidden>${video.categoria}</p>
                    </div>
                </li>
            `;
        })
    } catch (error){
        containerVideos.innerHTML = `
            <p> Houve um erro ao carregar os vídeos: ${error}</p>;
        `
    }
}

buscarEMostrarVideos();

// Barra de Pesquisa
const barraDePesquisa = document.querySelector(".pesquisar__input");

function filtrarPesquisa () {
    videos = document.querySelectorAll(".videos__item")
    const valorFiltro = barraDePesquisa.value.toLowerCase();

    if (barraDePesquisa.value != ""){

        for(let video of videos){    
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
            
            video.style.display = titulo.includes(valorFiltro) ? "block" : "none"

        }
    }
    else{  
        for(let video of videos){
            video.style.display = "block";
        }
        
    }
}

barraDePesquisa.addEventListener("input", filtrarPesquisa)

// Botoes Categorias
const botoesCategoria = document.querySelectorAll(".superior__item");

function filtrarPorCategoria(filtro){
    videos = document.querySelectorAll(".videos__item")
    filtro = filtro.toLowerCase()

    videos.forEach((video) => {
        let categoria = video.querySelector(".categoria").textContent.toLowerCase();
        
        if (!categoria.includes(filtro) && filtro != "tudo"){
            video.style.display = "none"
        }
        else{
            video.style.display = "block"
        }
    })
}

botoesCategoria.forEach((botao) => {
    let nomeCategoria = botao.getAttribute("name");
    botao.addEventListener("click", () => filtrarPorCategoria(nomeCategoria));
})


