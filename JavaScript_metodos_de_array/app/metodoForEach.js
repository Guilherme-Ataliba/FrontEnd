const elementoParaInserirLivros = document.getElementById("livros")
const valorLivrosDisponiveis = document.getElementById("valor_total_livros_disponiveis")

function exibirOsLivrosNaTela(livros){
    elementoParaInserirLivros.innerHTML = ""
    
    livros.forEach(livro => {
        disponibilidade = livro.quantidade > 0 ? "livro_imagens" : "livros_imagens indisponivel"
        elementoParaInserirLivros.innerHTML += `
            <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
            </div>
        `
    });
}