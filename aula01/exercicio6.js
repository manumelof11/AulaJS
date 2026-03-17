document.write("<h1>Exercício 6</h1>");

var quantidade = prompt("Digite a quantidade de produtos");
var preco = prompt("Digite o preço do produto");

var subtotal = Number(quantidade) * Number(preco);
var desconto = subtotal * 0.10