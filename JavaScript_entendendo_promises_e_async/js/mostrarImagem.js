import { lerArquivos } from "./lerArquivos.js"

const imagemPrincipal = document.querySelector(".main-imagem")
const nomeImagem = document.querySelector(".container-imagem-nome p")

lerArquivos.inputUpload.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0]

    if(arquivo){
        try{
            const conteudoArquivo = await lerArquivos.lerConteudoDoArquivo(arquivo)
            imagemPrincipal.src = conteudoArquivo.url
            nomeImagem.textContent = conteudoArquivo.nome
        } catch (error) {
            console.error(`Erro na leitura do arquivo. ${error}`)
        }
    }
})