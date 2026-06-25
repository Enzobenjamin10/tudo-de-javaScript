function trocarTitulo() {
    document.getElementById("titulo").innerText = "Dom é incrivel!";
}
function mudarCor() {
    document.getElementById("texto").style.color = "blue"   
}
function aumentarfonte() {
    document.getElementById("Texto").style.fontSize = "40px";  
}
function mostrarMensagem() {
    alert("bem-vindo a aula de dom!");
}
function mostrarNome() {
    let nome = document.getElementById("nome").value;
    document.getElementById("resultado").innerHTML = "olá, " + nome;
}
function verificarIdade() {
    let idade = document.getElementById("idade").value;
    if (idade >= 18) {
        document.getElementById("resultado").innerHTML = "maior de idade"
    }else{
        document.getElementById("resultado").innerHTML = "menor de idade"
  }
}
function somar() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let soma = n1 + n2;
    document.getElementById("resultado").innerHTML = "Resultado: " + soma;
}
function somar() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "Resultado: " + n1 + n2;
    
}
function subtrair() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "Resultado: " + n1 - n2;
}
function multiplicar() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "Resultado: " + n1 * n2;
}
function dividir() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    if (n2 === 0) {
        document.getElementById("resultado").innerHTML = "não é possivel dividir por zero";
    }else{
        document.getElementById("resultado").innerHTML = "Resultado: " + (n1 / n2);
    }
}


