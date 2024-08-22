const botaoPublicar = document.querySelector(".botao-publicar")
const botaoDescartar = document.querySelector(".botao-descartar");

const imagemPrincipal = document.querySelector(".main-imagem")
const nomeImagem = document.querySelector(".container-imagem-nome p")

async function publicarProjeto(nome, descricao, tags){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deuCerto = Math.random() > 0.5;
            
            if (deuCerto) {
                resolve("Projeto publicado com sucesso")
            } else{
                reject("Erro ao publicar o projeto")
            }
        }, 1000)
    })
}

botaoPublicar.addEventListener("click", async (evento) => {
    evento.preventDefault();

    const nomeProjeto = document.getElementById("nome").value;
    const descricaoProjeto = document.getElementById("descricao").value;
    const tagsProjeto = Array.from(listaTags.querySelectorAll("p")).map(tag => tag.textContent);

    try {
        const resultado = await publicarProjeto(nomeProjeto, descricaoProjeto, tagsProjeto);
        alert("Deu certo")
    } catch (erro) {
        alert("Deu errado")
        console.log(erro)
    }
})

botaoDescartar.addEventListener("click", (evento) => {
    evento.preventDefault()

    const formulario = document.querySelector("form");
    formulario.reset();

    imagemPrincipal.src = "img/imagem1.png";
    nomeImagem.textContent = "image_projeto.png"

    listaTags.innerHTML = ""
})