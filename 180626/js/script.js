/*
for(let i = 1; i <= 10; i++){
    console.log(i);
}
*/
/*
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
    
}
*/
/*
for (let i = 5; i >= 0; i--){
    console.log(i)
}
console.log("lançamento");
*/
/*
let numero = 7;

for(let i = 1; i <= 10; i++){
    console.log(numero + " x " + i + " = " + (numero * i));
}
*/
/*
let bateria = 100;
while(bateria > 0){
    console.log("Bateria: " + bateria + "%");
    bateria += 1;
}
*/
/*
let senha = "";

while(senha !== "1994"){
    senha = prompt("Digite a senha:");
}
alert("Acesso liberado!");
*/
/*
let energia = 100;
while(energia >= 0){
    console.log("energia: " + energia + "%");
    energia -= 10;
}
*/
/*
let opcao;
do {
    opcao = Number(prompt("1/jogar 2/ranking 3/sair"));
    switch(opcao){
    case 1:
        alert ("jogando");
        break;
    case 2:
        alert ("mostrando o ranking");
        break;
    case 3:
        alert ("saindo");
        break;
    default:
         alert("opção invalida");
        break;
    }
}while (opcao != "3");

*/
/*
let filmes = [
    "Minecraft",
    "A espera de um milagre",
    "homem aranha",
    "super man",
    "interestelar"
];

for(let i = 0; i < filmes.length; i++){
    console.log(filmes[i]);
}
*/
/*
notas=[7,8,10,5]

let soma = 0

for(let i =0; i < notas.lenght; i++){
    soma = soma + notas(i)
}
alert("valor total: "+ soma)
*/
/*
let vetor = [5, 10, 8, 7];
let soma = 0;
for (let i = 0; i < vetor.length; i++) {
    soma = soma + vetor[i];
}
let media = soma / vetor.length;
console.log("Média: " + media);
*/
/*
let idades = [15, 18, 22, 13, 30];
let maior = idades[0];
for (let i = 1; i < idades.length; i++) {
    if (idades[i] > maior) {
        maior = idades[i];
    }
}

console.log("Maior idade: " + maior);
*/
/*
let precos = [10.50, 25.00, 8.99, 12.75];
let menor = precos[0];
for (let i = 1; i < precos.length; i++) {
    if (precos[i] < menor) {
        menor = precos[i];
    }
}
console.log("Menor preço: " + menor);
*/
