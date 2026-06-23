function mostrarMensagem() {
    alert("voce clicou no botão!");
}
function alterarTitulo() {
    document.getElementById("titulo").innerText = "Título alterado com JavaScript!";
}
function mostrarNome() {
    let nome = document.getElementById("nome").value;
    document.getElementById("resultado").innerText = "Olá, " + nome + "!";
}

function verificarIdade() {
    let idade = Number(document.getElementById("idade").value);
    if (idade >= 18) {
        document.getElementById("resultado").innerText = "Você é maior de idade.";
    } else {
        document.getElementById("resultado").innerText = "Você é menor de idade.";
    }
}
function trocarImagem() {
    document.getElementById("imagem").src = "download.webp" ;
}
function esconderTexto() {
    document.getElementById("texto").style.display = "none";
}
function mostrarTexto() {
    document.getElementById("texto").style.display = "block";
}
function criarParagrafo() {
    let novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = "OLHA SÓ! um paragrafo";

    document.getElementById("area").appendChild(novoParagrafo);
}