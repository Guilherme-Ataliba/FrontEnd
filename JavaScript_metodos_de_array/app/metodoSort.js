const btnOrdenacao = document.getElementById("btnOrdenarPorPreco")

function ordenaLivros(){
    livrosOdernados = livros.sort((a,b) => {
        return a.preco - b.preco
    })
    exibirOsLivrosNaTela(livrosOdernados)
}

btnOrdenacao.addEventListener("click", ordenaLivros)
