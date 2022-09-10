let contador = 0;
var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    let resultado2 = document.getElementById("resultado2")
    var elementoRedultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    if (chute == numeroSecreto) {
        elementoRedultado.innerHTML = "acertou";
    } else if (chute > 10) {
        elementoRedultado.innerHTML = "Coloque um numero de 0 a 10";
    } else {
        elementoRedultado.innerHTML = "errou";
    }
    contador++
    if (contador < 3) {
        console.log(contador)
    } else {
        resultado2.innerHTML = ("Suas chances acabaram. O numero secreto era: " + numeroSecreto)
        document.getElementById("botaoA").disabled = true;
        document.getElementById("botaoA").style.backgroundColor = "Cornsilk";
        document.getElementById("botaoA").style.color = "black";
        document.getElementById("botaoA").style.cursor = "not-allowed";
    }
}

// hoal mundo