

function encriptar (){
    var encriptado = document.getElementById("texto").value;

    var textArea = encriptado.replace(/e/img, "enter");
    var textArea = textArea.replace(/i/img, "imes");
    var textArea = textArea.replace(/a/img, "ai");
    var textArea = textArea.replace(/o/img, "ober");
    var textArea = textArea.replace(/u/img, "ufat");

    document.getElementById("mensajeE").innerHTML = textArea;

    document.getElementById("copy").style.display = "show";

    document.getElementById("copy").style.display = "inherit";

}

function desencriptar (){
    var desencriptado = document.getElementById("texto").value;

    var mensajedes = desencriptado.replace(/enter/img, "e");
    var mensajedes = mensajedes.replace(/imes/img, "i");
    var mensajedes = mensajedes.replace(/ai/img, "a");
    var mensajedes = mensajedes.replace(/ober/img, "o");

    document.getElementById("mensajeE").innerHTML = mensajedes;
}

function copiar (){
    var copiando = document.querySelector("#mensajeE");
    copiando.select();
    document.execCommand("copy");
}

