// =========================
// MENU ATIVO
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =========================
// ANIMAÇÃO DOS CARDS
// =========================

const elementos = document.querySelectorAll(".card, .projeto");

const aparecer = () => {

    elementos.forEach(item => {

        const topo = item.getBoundingClientRect().top;

        if (topo < window.innerHeight - 80) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

};

elementos.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "0.8s";

});

window.addEventListener("scroll", aparecer);
window.addEventListener("load", aparecer);

// =========================
// EFEITO DE DIGITAÇÃO
// =========================

const titulo = document.querySelector(".texto h1");

const textoOriginal = titulo.innerHTML;

titulo.innerHTML = "";

let i = 0;

function digitar() {

    if (i < textoOriginal.length) {

        titulo.innerHTML += textoOriginal.charAt(i);

        i++;

        setTimeout(digitar, 35);

    }

}

window.onload = () => {

    digitar();
    aparecer();

};

// =========================
// SCROLL SUAVE
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior: "smooth"
        });

    });

});