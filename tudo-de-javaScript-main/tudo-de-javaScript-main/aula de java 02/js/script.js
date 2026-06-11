/**let nota = Number(prompt("informe uma nota"))

if(nota >=90 ){
    alert("o conceito é A")
}else if(nota >=80){
    alert("o conceito é B")
}else{
    alert("o conceito é C")
}
     

let numero = Number(prompt("informe um numero de 1 a 7: "));

switch (numero) {
    case 1: alert("domingo")
        break;
    case 2: alert("segunda")
        break;
    case 3: alert("terça")
        break;
    case 4: alert("quarta")
        break;
    case 5: alert("quinta")
        break;
    case 6: alert("sexta")
        break;
    case 7: alert("sabado")
        break;
    default: alert("dia invalido")
}
    

let temperatura = Number(prompt("informe a temperatura: "))

let temp = temperatura>25?"quente":"frio";
alert(temp)


let maiorIdade = prompt("é maior de idade")==="true"

let carteira = prompt("tem carteira de motorista")=== "true"

if(maiorIdade >=18 && carteira){
    alert("pode dirigir")
}else{
    alert("nao pode dirigir")
}
    

let numero = Number(prompt("informe um numero"))

if(numero >10 && numero <=20){
    alert("dentro do intervalo!")
}else{
    alert("fora do intervalo!")
}
    
let cor= prompt("informe uma cor").
toLowerCase()
switch(cor){
    case "Vermelho": alert("Pare");
    break
    case"amarelo": alert("Atenção");
    break;
    case"verde": alert("Siga");
    break;
   
*/
/** 
Decisão com if/else: Crie uma variável com idade
 e use if/else para decidir se é maior de idade ou não
 */



















 /**Atividade 

1-

 let idade = Number(prompt("idade"));
 if(idade >=18){
    alert("maior de idade");
 } else {
    alert("menor de idade");
 }

*/


/**
 2-

 let numero = Number(prompt("numero de 1 a 3:"));
 switch (numero){
    case 1: alert("Baixo");
    break;
    case 2: alert("Médio");
    break;
    case 3: alert("Alto");
    break;
    default("numero invalido");
 }

*/

/**
3-

  let numero = Number(prompt("digite"));
  let resultado = numero >= 8? "positivo" :"negativo";
  alert(resultado);

*/
/**
4-
 
let idade = Number(prompt("idade"));
let nacionalidade = prompt("nacionalidade");
if (idade >=16 && nacionalidade === "brasileiro"){
    alert("pode votar");
}else {
    alert("não pode votar");
}
*/

/** 

if_else.md  atividade
  

1
let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("digite o segundo numero:"));
if (numero1 > numero2) {
    alert ("o maior numero é :" + numero1);
}else {
    alert ("o maior numero é :" + numero2);
}


2
let numero = Number(prompt("digite o valor"));
if (numero >= 0){
    alert ("o valor é positivo");
}else {
    alert ("o valor é negativo");
}


3
let sexo = prompt("digite F ou M:");
if (sexo == "F" || sexo == "f") {
    alert ("feminino");
}else if (sexo == "M" || sexo == "m") {
    alert ("Masculino")
}else {
    alert ("Sexo invalido");
}

4
let letra = prompt("digite uma letra");
if 
   (letra == "a" || letra == "e" || letra == "i" ||
    letra == "o" || letra == "u" || letra == "A" ||
    letra == "E" || letra == "I" || letra == "O" ||
    letra == "U" ) {
        alert("vogal");
    }else {
        alert("consoante");
    }

5
let nota1 = Number(prompt("digite a nota1"));
let nota2 = Number(prompt("digite a nota2"));
let media = (nota1 + nota2) /2;
if (media == 10) {
    alert ("aprovado com distinção");
}else if (media >= 7){
    alert ("aprovado");
}
else{
    alert ("reprovado");
}


6
let n1 = Number(prompt("digite o primeiro numero"));
let n2 = Number(prompt("digite o segundo numero"));
let n3 = Number(prompt("digite o terceiro numero"));
if (n1 > n2 && n1 > n3) {
    alert ("o maior numero é :" + n1);
}else if (n2 > n1 && n2 > n3){
    alert("o maior numero é: " + n2);
}else {
    alert("o maior numero é: " + n3);
}
    */

let n1 = Number(prompt("digite o primeiro numero"));
let n2 = Number(prompt("digite o segundo numero"));
let n3 = Number(prompt("digite o terceiro numero"));
let maior;
let menor;
if(n1 > n2 && n1 > n3) {
    maior = n1;
}else if (n2 > n1 && n2 > n3) {
    maior = n2;
} else {
    maior = n3;
}
if (n1 < n2 && n1 < n3) {
    menor = n1;
}else if (n2 < n1 && n2 < n3) {
    menor = n2;
}else {
    menor = n3;
}
alert("maior: " + maior + "\nmenor:" + menor);