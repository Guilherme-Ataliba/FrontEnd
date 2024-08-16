const image_dir = "imagens";

const html = document.querySelector("html");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");

const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");

const musicaFocoInput = document.querySelector("#alternar-musica");
const musica = new Audio("sons/luna-rise-part-one.mp3");
musica.loop = true;

const startPauseBt = document.querySelector("#start-pause");
const playSound = new Audio("sons/play.wav");
const pauseSound = new Audio("sons/pause.mp3");
const endSound = new Audio("sons/beep.mp3");
const startPauseText = document.querySelector("#start-pause span");
const startPauseIcon = document.querySelector("#start-pause img");

const timeScreen = document.querySelector("#timer");

let current = focoBt;
let currentTime = 1500;

// Context Control - Background and icons ========================
function changeBackground(element, value){
    element.addEventListener("click", function(){
        html.setAttribute("data-contexto", value);
        banner.setAttribute("src", `${image_dir}/${value}.png`);

        // Button Background
        current.classList.remove("active");
        element.classList.add("active");
        current = element;

        // Title Text
        switch (value) {
            case "foco":
                titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`;

                pause() 
                displayPlay();
                currentTime = 1500;
                showTime();
                break;
        
            case "descanso-curto":
                titulo.innerHTML = `Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`;

                pause()
                displayPlay();
                currentTime = 300;
                showTime();
                break;
            
            case "descanso-longo":
                titulo.innerHTML = `Hora de voltar à superfície<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`;

                pause()
                displayPlay();
                currentTime = 900;
                showTime();
                break;  
            
            default: 
                break;
        }


    });
}

changeBackground(focoBt, "foco");
changeBackground(curtoBt, "descanso-curto");
changeBackground(longoBt, "descanso-longo");

// ================================================================
// Background Music Control =======================================

musicaFocoInput.addEventListener("change", function(){
    if (musicaFocoInput.checked) {
        musica.play();
    }
    else{
        musica.pause();
        musica.currentTime = 0;
    }
})

// ================================================================
// Timer Control ==================================================

let intervalId = null;

function contagemRegressiva (){
    currentTime -= 1;
    showTime()
    

    if (currentTime <= 0){
        pause();
        endSound.play();
    }
}

function pause (){ 
    clearInterval(intervalId);
    intervalId = null;
}

function displayPause(){
    playSound.play();
    startPauseText.textContent = "Pausar";
    startPauseIcon.setAttribute("src", image_dir + "/pause.png");
}

function displayPlay(){
    pauseSound.play();
    startPauseText.textContent = "Começar";
    startPauseIcon.setAttribute("src", image_dir + "/play_arrow.png");
}

startPauseBt.addEventListener("click", function() {
    if (currentTime <= 0){currentTime=5;}
    
    // Start
    if (intervalId){
        pause();
        displayPlay()
    }
    // Pause
    else {
        intervalId = setInterval(contagemRegressiva, 1000);
        displayPause()
    }
})

function showTime(){
    const tempo = new Date(currentTime * 1000);
    const tempoFormatado = tempo.toLocaleTimeString("pt-br",
        {minute: "2-digit", second: "2-digit"}
    )
    timeScreen.innerHTML = `${tempoFormatado}`;
}
showTime()
