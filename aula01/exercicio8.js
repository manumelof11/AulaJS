document.write("<h1>Exercício 8</h1>");

var peso = prompt("Digite o peso em KG");
var altura = prompt("Digite a altura em metros");

var IMC = Number(peso) / (altura * altura);
document.write("O valor do IMC é " + IMC + "<br>");