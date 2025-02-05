let isSpeaking = false;
let speechInstance;

function leerTexto() {
    if (isSpeaking) {
        window.speechSynthesis.cancel();
        isSpeaking = false;
        document.getElementsByName('leer').innerText = 'Leer Página';
    } else {
        let texto = document.body.innerText;
        speechInstance = new SpeechSynthesisUtterance(texto);
        speechInstance.lang = 'es-ES';
        window.speechSynthesis.speak(speechInstance);
        isSpeaking = true;
        document.getElementsByName('leer').innerText = 'Detener Lectura';
    }
}