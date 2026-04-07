function Exercicio4()
{
    let base = Number (document.getElementById("base").value);
    let altura = Number (document.getElementById("altura").value);

    area = base * altura/2;

    document.getElementById("resultado").innerHTML = "<p>A área do triângulo é " + area + "</p>";
}