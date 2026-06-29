let nome = document.getElementById("nome");
let genero = document.getElementById("genero");
let ano = document.getElementById("ano");

let cadastrar = document.getElementById("cadastrar");
let lista = document.getElementById("lista");
let contador = document.getElementById("contador");
let modo = document.getElementById("modo");
let quantidade = 0;

cadastrar.addEventListener("click", function(){
    if(nome.value == "" || genero.value == "" || ano.value == ""){
        alert("Preencha todos os campos!");
        return;
    }

    let div = document.createElement("div");
    div.classList.add("filme");
    div.innerHTML =
    "<h2>🎬 " + nome.value + "</h2>" +
    "<p>🎭 " + genero.value + "</p>" +
    "<p>📅 " + ano.value + "</p>";

    let excluir = document.createElement("button");
    excluir.innerText = "Excluir";
    excluir.addEventListener("click", function(){
        div.remove();
        quantidade--;
        contador.innerText = "Filmes cadastrados: " + quantidade;

    });

    div.appendChild(excluir);
    lista.appendChild(div);
    quantidade++;
    contador.innerText = "Filmes cadastrados: " + quantidade;
    nome.value = "";
    genero.value = "";
    ano.value = "";

});

modo.addEventListener("click", function(){
    document.body.classList.toggle("escuro");

});