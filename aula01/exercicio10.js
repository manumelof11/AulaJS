document.write("<h1>Exercício 10</h1>");

var valor = prompt("Valor da hora");
var quantidade = prompt ("Quantidade de horas trabalhadas por dia");

var salario = Number(valor) * Number(quantidade) * 30;
document.write("O valor do salário é "+ salario + "<br>");