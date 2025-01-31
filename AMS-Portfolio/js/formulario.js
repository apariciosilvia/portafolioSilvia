document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("AFw2abqzeLBiYvooh");

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();

        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let mensaje = document.getElementById("mensaje").value;

        let templateParams = {
            from_name: nombre,
            from_email: email,
            message: mensaje,
        };

        emailjs.send("service_d4typa1", "template_uwir9gg", templateParams)
            .then(response => {
                mostrarToast("Mensaje enviado con éxito", "bg-success");

                // Vaciar los campos del formulario después del envío
                document.getElementById("nombre").value = "";
                document.getElementById("email").value = "";
                document.getElementById("mensaje").value = "";
            })
            .catch(error => {
                mostrarToast("Error al enviar el mensaje", "bg-danger");
                console.error("Error:", error);
            });
    });

    function mostrarToast(mensaje, tipo) {
        let toastElement = document.getElementById("toastMensaje");
        let toastBody = toastElement.querySelector(".toast-body");

        toastBody.textContent = mensaje;
        toastElement.classList.remove("bg-success", "bg-danger");
        toastElement.classList.add(tipo);

        let toast = new bootstrap.Toast(toastElement, { delay: 5000 });
        toast.show();
    }
});
