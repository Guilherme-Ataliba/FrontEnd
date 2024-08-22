function aplicarDescontoLivros(livros) {
    const desconto = 0.3;
    const livrosDesconto = livros.map((livro) => {
        return {...livro, preco: livro.preco - livro.preco * desconto}
    })

    return livrosDesconto
}