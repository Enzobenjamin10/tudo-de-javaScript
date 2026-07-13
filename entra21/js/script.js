
const links = document.querySelectorAll('nav a');
links.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const id = this.getAttribute('href');

        const secao = document.querySelector(id);

        secao.scrollIntoView({
            behavior: 'smooth'
        });

    });

});

const elementos = document.querySelectorAll('.card, .tec, .projeto');
const observer = new IntersectionObserver((entradas)=>{
    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add('mostrar');

        }

    });

});

elementos.forEach((el)=>{

    observer.observe(el);

});

const botaoTopo = document.createElement("button");
botaoTopo.innerHTML = "⬆";
botaoTopo.classList.add("topo");
document.body.appendChild(botaoTopo);
window.addEventListener("scroll", ()=>{

    if(window.scrollY > 400){

        botaoTopo.style.display = "block";

    }else{

        botaoTopo.style.display = "none";

    }

});

botaoTopo.addEventListener("click", ()=>{
    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});