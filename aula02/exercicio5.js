function Exercicio5()
{
    let lados = Number (document.getElementById("lados").value)

    area = lados * lados 

    document.getElementById("resultado").innerHTML = "<p>A área do quadrado é " + area + "</p>";
}
