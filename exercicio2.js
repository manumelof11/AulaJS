function Exercicio2()
{
    let numero = Number( document.getElementById("temperatura").value );

    let temperatura;
    temperatura = Number(temperatura - 32) * 5/9;

    document.getElementById("resultado").innerHTML ="<p>O resultado em Celsius é " + temperatura + "</p>";
}