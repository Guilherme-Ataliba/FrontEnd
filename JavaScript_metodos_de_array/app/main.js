let livros = []
const endPointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endPointDaAPI)
    livros = await res.json()
    livrosDesconto = aplicarDescontoLivros(livros)
    exibirOsLivrosNaTela(livrosDesconto)
}

getBuscarLivrosDaAPI()