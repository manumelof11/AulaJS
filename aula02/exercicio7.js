function Exercicio7()
{
    let nota1 = parseFloat(document.getElementById("n1").value);
    let nota2 = parseFloat(document.getElementById("n2").value);
    let nota3 = parseFloat(document.getElementById("n3").value);

    media = (nota1 + nota2 + nota3)/3
    document.getElementById("resultado").innerHTML = "<p>A média do aluno é " + media + "</p>";
}