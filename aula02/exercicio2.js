function Exercicio2()
{
     let fah = parseFloat(document.getElementById("fah").value);

     let celsius = (fah - 32) * 5/9;

    document.getElementById("resultado").innerHTML = "<p>O valor em celsius é " + celsius + "</p>";
}

 