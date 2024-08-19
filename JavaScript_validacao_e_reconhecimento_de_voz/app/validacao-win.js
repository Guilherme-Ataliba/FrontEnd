const btnJogarNovamente = document.getElementById("jogar-novamente")
const numeroVitoria = document.getElementById("numero-vitoria")

numeroVitoria.innerText = localStorage.getItem("numeroVitoria");

btnJogarNovamente.addEventListener("click", () => {
    window.location.href = "index.html"
})