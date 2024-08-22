function calcularValorLivrosDisponiveis(livros){
    return livros.reduce((acc, livro) => {
        return acc + livro.preco
    }, 0)
}