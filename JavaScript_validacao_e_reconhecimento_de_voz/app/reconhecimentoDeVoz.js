const elementoChuteValue = document.getElementById("chute-value")

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-br";
recognition.start();


function exibeChuteNaTela(chute){
    elementoChuteValue.textContent = chute;

}

function onSpeak (event){
    let chute = event.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaChute(chute)
}

recognition.addEventListener("result", onSpeak)
recognition.addEventListener("end", () => recognition.start())
