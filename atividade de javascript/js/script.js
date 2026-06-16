
// 1.
let num1_ex1 = parseFloat(prompt("Ex 1 - Digite o primeiro número:"));
let num2_ex1 = parseFloat(prompt("Ex 1 - Digite o segundo número:"));
if (num1_ex1 > num2_ex1) {
    console.log("O maior é: " + num1_ex1);
} else if (num2_ex1 > num1_ex1) {
    console.log("O maior é: " + num2_ex1);
} else {
    console.log("Os números são iguais.");
}

// 2.
let valor_ex2 = parseFloat(prompt("Ex 2 - Digite um valor:"));
if (valor_ex2 > 0) {
    console.log("O valor é positivo.");
} else if (valor_ex2 < 0) {
    console.log("O valor é negativo.");
} else {
    console.log("O valor é zero.");
}

// 3.
let letra_ex3 = prompt("Ex 3 - Digite F ou M:").toUpperCase();
if (letra_ex3 === "F") {
    console.log("F - Feminino");
} else if (letra_ex3 === "M") {
    console.log("M - Masculino");
} else {
    console.log("Sexo inválido");
}

// 4.
let letra_ex4 = prompt("Ex 4 - Digite uma letra:").toLowerCase();
if ("aeiou".includes(letra_ex4)) {
    console.log("É uma vogal.");
} else if (letra_ex4 >= "a" && letra_ex4 <= "z") {
    console.log("É uma consoante.");
} else {
    console.log("Não é uma letra válida.");
}

// 5.
let nota1_ex5 = parseFloat(prompt("Ex 5 - Digite a primeira nota:"));
let nota2_ex5 = parseFloat(prompt("Ex 5 - Digite a segunda nota:"));
let media_ex5 = (nota1_ex5 + nota2_ex5) / 2;
if (media_ex5 === 10) {
    console.log("Aprovado com Distinção");
} else if (media_ex5 >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// 6.
let n1_ex6 = parseFloat(prompt("Ex 6 - Número 1:"));
let n2_ex6 = parseFloat(prompt("Ex 6 - Número 2:"));
let n3_ex6 = parseFloat(prompt("Ex 6 - Número 3:"));
let maior_ex6 = Math.max(n1_ex6, n2_ex6, n3_ex6);
console.log("O maior número é: " + maior_ex6);

// 7.
let n1_ex7 = parseFloat(prompt("Ex 7 - Número 1:"));
let n2_ex7 = parseFloat(prompt("Ex 7 - Número 2:"));
let n3_ex7 = parseFloat(prompt("Ex 7 - Número 3:"));
let maior_ex7 = Math.max(n1_ex7, n2_ex7, n3_ex7);
let menor_ex7 = Math.min(n1_ex7, n2_ex7, n3_ex7);
console.log("Maior: " + maior_ex7);
console.log("Menor: " + menor_ex7);

// 8.
let p1_ex8 = parseFloat(prompt("Ex 8 - Preço do produto 1:"));
let p2_ex8 = parseFloat(prompt("Ex 8 - Preço do produto 2:"));
let p3_ex8 = parseFloat(prompt("Ex 8 - Preço do produto 3:"));
if (p1_ex8 < p2_ex8 && p1_ex8 < p3_ex8) {
    console.log("Você deve comprar o primeiro produto.");
} else if (p2_ex8 < p1_ex8 && p2_ex8 < p3_ex8) {
    console.log("Você deve comprar o segundo produto.");
} else {
    console.log("Você deve comprar o terceiro produto.");
}

// 9.
let n1_ex9 = parseFloat(prompt("Ex 9 - Número 1:"));
let n2_ex9 = parseFloat(prompt("Ex 9 - Número 2:"));
let n3_ex9 = parseFloat(prompt("Ex 9 - Número 3:"));
let numeros_ex9 = [n1_ex9, n2_ex9, n3_ex9];
numeros_ex9.sort((a, b) => b - a);
console.log("Ordem decrescente: " + numeros_ex9.join(", "));

// 10.
let turno_ex10 = prompt("Ex 10 - Turno de estudo? (M/V/N):").toUpperCase();
switch (turno_ex10) {
    case "M": console.log("Bom dia!"); break;
    case "V": console.log("Boa tarde!"); break;
    case "N": console.log("Boa noite!"); break;
    default: console.log("Valor inválido");
}

// 11.
let salario_ex11 = parseFloat(prompt("Ex 11 - Digite o salário atual:"));
let percentual_ex11 = 0;
if (salario_ex11 <= 280) percentual_ex11 = 20;
else if (salario_ex11 <= 700) percentual_ex11 = 15;
else if (salario_ex11 <= 1500) percentual_ex11 = 10;
else percentual_ex11 = 5;
let aumento_ex11 = salario_ex11 * (percentual_ex11 / 100);
let novoSalario_ex11 = salario_ex11 + aumento_ex11;
console.log(`Salário antes do reajuste: R$ ${salario_ex11.toFixed(2)}`);
console.log(`Percentual aplicado: ${percentual_ex11}%`);
console.log(`Valor do aumento: R$ ${aumento_ex11.toFixed(2)}`);
console.log(`Novo salário: R$ ${novoSalario_ex11.toFixed(2)}`);

// 12.
let valorHora_ex12 = parseFloat(prompt("Ex 12 - Valor da hora trabalhada:"));
let horasTrabalhadas_ex12 = parseFloat(prompt("Ex 12 - Horas trabalhadas no mês:"));
let salarioBruto_ex12 = valorHora_ex12 * horasTrabalhadas_ex12;
let irPercentual_ex12 = 0;
if (salarioBruto_ex12 <= 900) irPercentual_ex12 = 0;
else if (salarioBruto_ex12 <= 1500) irPercentual_ex12 = 5;
else if (salarioBruto_ex12 <= 2500) irPercentual_ex12 = 10;
else irPercentual_ex12 = 20;
let ir_ex12 = salarioBruto_ex12 * (irPercentual_ex12 / 100);
let inss_ex12 = salarioBruto_ex12 * 0.10;
let sindicato_ex12 = salarioBruto_ex12 * 0.03;
let fgts_ex12 = salarioBruto_ex12 * 0.11;
let totalDescontos_ex12 = ir_ex12 + inss_ex12 + sindicato_ex12;
let salarioLiquido_ex12 = salarioBruto_ex12 - totalDescontos_ex12;
console.log(`Salário Bruto (${valorHora_ex12} * ${horasTrabalhadas_ex12}) : R$ ${salarioBruto_ex12.toFixed(2)}`);
console.log(`(-) IR (${irPercentual_ex12}%)                : R$ ${ir_ex12.toFixed(2)}`);
console.log(`(-) INSS (10%)             : R$ ${inss_ex12.toFixed(2)}`);
console.log(`FGTS (11%)                 : R$ ${fgts_ex12.toFixed(2)}`);
console.log(`Total de descontos         : R$ ${totalDescontos_ex12.toFixed(2)}`);
console.log(`Salário Líquido            : R$ ${salarioLiquido_ex12.toFixed(2)}`);

// 13.
let dia_ex13 = parseInt(prompt("Ex 13 - Digite um número (1-7):"));
let diasDaSemana_ex13 = {
    1: "Domingo", 2: "Segunda", 3: "Terça", 
    4: "Quarta", 5: "Quinta", 6: "Sexta", 7: "Sábado"
};
console.log(diasDaSemana_ex13[dia_ex13] || "Valor inválido");


// 14.
let nota1_ex14 = parseFloat(prompt("Ex 14 - Nota 1:"));
let nota2_ex14 = parseFloat(prompt("Ex 14 - Nota 2:"));
let media_ex14 = (nota1_ex14 + nota2_ex14) / 2;
let conceito_ex14 = "";
if (media_ex14 >= 9 && media_ex14 <= 10) conceito_ex14 = "A";
else if (media_ex14 >= 7.5) conceito_ex14 = "B";
else if (media_ex14 >= 6) conceito_ex14 = "C";
else if (media_ex14 >= 4) conceito_ex14 = "D";
else conceito_ex14 = "E";
let situacao_ex14 = ["A", "B", "C"].includes(conceito_ex14) ? "APROVADO" : "REPROVADO";
console.log(`Notas: ${nota1_ex14} e ${nota2_ex14}\nMédia: ${media_ex14}\nConceito: ${conceito_ex14}\nSituação: ${situacao_ex14}`);

// 15.
let l1_ex15 = parseFloat(prompt("Ex 15 - Lado 1:"));
let l2_ex15 = parseFloat(prompt("Ex 15 - Lado 2:"));
let l3_ex15 = parseFloat(prompt("Ex 15 - Lado 3:"));
if (l1_ex15 + l2_ex15 > l3_ex15 && l1_ex15 + l3_ex15 > l2_ex15 && l2_ex15 + l3_ex15 > l1_ex15) {
    if (l1_ex15 === l2_ex15 && l2_ex15 === l3_ex15) {
        console.log("Triângulo Equilátero");
    } else if (l1_ex15 === l2_ex15 || l1_ex15 === l3_ex15 || l2_ex15 === l3_ex15) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
} else {
    console.log("Os lados não formam um triângulo.");
}

// 16.
let a_ex16 = parseFloat(prompt("Ex 16 - Digite o valor de a:"));
if (a_ex16 === 0) {
    console.log("A equação não é de segundo grau.");
} else {
    let b_ex16 = parseFloat(prompt("Ex 16 - Digite o valor de b:"));
    let c_ex16 = parseFloat(prompt("Ex 16 - Digite o valor de c:"));
    let delta_ex16 = (b_ex16 * b_ex16) - (4 * a_ex16 * c_ex16);
    if (delta_ex16 < 0) {
        console.log("A equação não possui raízes reais.");
    } else if (delta_ex16 === 0) {
        let r = -b_ex16 / (2 * a_ex16);
        console.log("Possui apenas uma raiz real: " + r);
    } else {
        let r1 = (-b_ex16 + Math.sqrt(delta_ex16)) / (2 * a_ex16);
        let r2 = (-b_ex16 - Math.sqrt(delta_ex16)) / (2 * a_ex16);
        console.log(`Possui duas raízes reais: ${r1} e ${r2}`);
    }
}
// 17.
let ano_ex17 = parseInt(prompt("Ex 17 - Digite o ano:"));
if ((ano_ex17 % 4 === 0 && ano_ex17 % 100 !== 0) || (ano_ex17 % 400 === 0)) {
    console.log("O ano é bissexto.");
} else {
    console.log("O ano não é bissexto.");
}

// 18.
let num_ex18 = parseInt(prompt("Ex 18 - Digite um número inteiro:"));
if (num_ex18 % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

// 19.
let num_ex19 = parseFloat(prompt("Ex 19 - Digite um número:"));
let parImpar_ex19 = (num_ex19 % 2 === 0) ? "Par" : "Ímpar";
let posNeg_ex19 = (num_ex19 >= 0) ? "Positivo" : "Negativo";
console.log(`O número é ${parImpar_ex19} e ${posNeg_ex19}.`);

// 20.
let q1_ex20 = prompt("Ex 20 - Telefonou para a vítima? (S/N)").toUpperCase() === "S";
let q2_ex20 = prompt("Ex 20 - Esteve no local do crime? (S/N)").toUpperCase() === "S";
let q3_ex20 = prompt("Ex 20 - Mora perto da vítima? (S/N)").toUpperCase() === "S";
let q4_ex20 = prompt("Ex 20 - Devia para a vítima? (S/N)").toUpperCase() === "S";
let q5_ex20 = prompt("Ex 20 - Já trabalhou com a vítima? (S/N)").toUpperCase() === "S";
let sim_ex20 = [q1_ex20, q2_ex20, q3_ex20, q4_ex20, q5_ex20].filter(Boolean).length;
if (sim_ex20 === 2) console.log("Suspeita");
else if (sim_ex20 === 3 || sim_ex20 === 4) console.log("Cúmplice");
else if (sim_ex20 === 5) console.log("Assassino");
else console.log("Inocente");

// 21.
let n1_ex21 = parseFloat(prompt("Ex 21 - Número 1:"));
let n2_ex21 = parseFloat(prompt("Ex 21 - Número 2:"));
if (n1_ex21 > n2_ex21) {
    console.log(`Maior: ${n1_ex21}, Menor: ${n2_ex21}`);
} else if (n2_ex21 > n1_ex21) {
    console.log(`Maior: ${n2_ex21}, Menor: ${n1_ex21}`);
} else {
    console.log("Os números são iguais.");
}

// 22.
let n1_ex22 = parseInt(prompt("Ex 22 - N1:"));
let n2_ex22 = parseInt(prompt("Ex 22 - N2:"));
let n3_ex22 = parseInt(prompt("Ex 22 - N3:"));
let maior_ex22 = n1_ex22;
if (n2_ex22 > maior_ex22) maior_ex22 = n2_ex22;
if (n3_ex22 > maior_ex22) maior_ex22 = n3_ex22;
let menor_ex22 = n1_ex22;
if (n2_ex22 < menor_ex22) menor_ex22 = n2_ex22;
if (n3_ex22 < menor_ex22) menor_ex22 = n3_ex22;
console.log(`Maior: ${maior_ex22}, Menor: ${menor_ex22}`);

// 23.
let numero = Number(prompt("Digite um número:"));

if (numero % 2 === 0) {
    alert("O número é par");
} else {
    alert("O número é ímpar");
}

// 24.
let raio_ex24 = parseFloat(prompt("Ex 24 - Digite o raio da circunferência:"));
let diametro_ex24 = 2 * raio_ex24;
let comprimento_ex24 = 2 * Math.PI * raio_ex24;
let area_ex24 = Math.PI * Math.pow(raio_ex24, 2);
console.log(`Diâmetro: ${diametro_ex24.toFixed(2)}`);
console.log(`Comprimento: ${comprimento_ex24.toFixed(2)}`);
console.log(`Área: ${area_ex24.toFixed(2)}`);

// 25.
let idade_ex25 = parseInt(prompt("Ex 25 - Qual a sua idade?"));
if (idade_ex25 >= 18 && idade_ex25 <= 67) {
 console.log("Você pode doar sangue.");
} else {
    console.log("Você não pode doar sangue.");
}

// 26.
let dia_ex26 = parseInt(prompt("Ex 26 - Dia:"));
let mes_ex26 = parseInt(prompt("Ex 26 - Mês:"));
let ano_ex26 = parseInt(prompt("Ex 26 - Ano:"));
if (dia_ex26 < 1 || dia_ex26 > 31) {
    console.log("Data inválida: O dia deve ser entre 1 e 31.");
} else if (mes_ex26 < 1 || mes_ex26 > 12) {
    console.log("Data inválida: O mês deve ser entre 1 e 12.");
} else if (ano_ex26 > 2013) {
    console.log("Data inválida: O ano não pode ser maior que 2013.");
} else {
    console.log(`Data válida: ${dia_ex26}/${mes_ex26}/${ano_ex26}`);
}

// 27.
let x_ex27 = parseFloat(prompt("Ex 27 - Digite o valor de x:"));
let y_ex27 = parseFloat(prompt("Ex 27 - Digite o valor de y:"));
console.log(`Antes: x = ${x_ex27} | y = ${y_ex27}`);
let temp_ex27 = x_ex27;
x_ex27 = y_ex27;
y_ex27 = temp_ex27;
console.log(`Depois: x = ${x_ex27} | y = ${y_ex27}`);


