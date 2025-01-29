function leerTexto() {
    let texto = document.body.innerText; // Obtiene el texto visible de la página
    let voz = new SpeechSynthesisUtterance(texto);
    voz.lang = 'es-ES'; // Establece el idioma español
    window.speechSynthesis.speak(voz);
}