const btnLivros = Array.from(document.querySelectorAll(".btn"))
const listaBtns = ["btn-front", "btn-back", "btn-dados", "btn-disponiveis"]
const btnLivrosFiltro = btnLivros.filter(livro => listaBtns.includes(livro.classList[1]))

function mostrarValorLivrosDisponiveis (valorTotalLivros){
    valorLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotalLivros}</span></p>
    </div>
    `
}

function filtraLivros(){
    const categoriaBtn = this.value
    let livrosFiltrados
    
    if (categoriaBtn == "disponivel"){
        livrosFiltrados = livros.filter(livro => {
            return livro.quantidade > 0
        });

        const valorTotalLivros = calcularValorLivrosDisponiveis(livrosFiltrados).toFixed(2)
        mostrarValorLivrosDisponiveis(valorTotalLivros)
    } 
    else {
        livrosFiltrados = livros.filter(livro => {
            return livro.categoria == categoriaBtn
        });

        valorLivrosDisponiveis.innerHTML = ""
    }
    
    exibirOsLivrosNaTela(livrosFiltrados)

}

btnLivrosFiltro.forEach((livro) => livro.addEventListener(
    "click", filtraLivros
))