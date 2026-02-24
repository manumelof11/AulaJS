var nome = "Emanuele";
var idade = "15";
var altura = 1.64;

console.log( nome );
console.log( idade );
console.log( altura );

document.write("<h1> Olá, seja bem vindo ao JavaScript</h1>")

document.write( nome + "<br>" );
document.write( idade + "<br>" );
document.write( altura + "<br>");

var dias = idade * 365;

document.write("<p style= 'color : purple'>Você já viveu " + dias + "")