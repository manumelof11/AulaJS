function exercicio11()
{
    let valor = parseFloat(document.getElementById("valor").value);
    let quilometros = parseFloat(document.getElementById("km").value);
    let minutos = parseFloat(document.getElementById("minutos").value);

    total = (valor * quilometros) + (minutos * 0.50)
    document.getElementById("resultado").innerHTML = "<p>O valor total da corrida é de " + total + "</p>";
}