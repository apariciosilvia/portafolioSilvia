document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Detectar cuando un elemento entra en la pantalla
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // Permite repetir la animación
            }
        });
    }, { threshold: 0.3 });

    // Aplicar el observer a todos los elementos con animaciones
    document.querySelectorAll(".animate, .slide-left, .slide-right").forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // Permite repetir la animación
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
});
