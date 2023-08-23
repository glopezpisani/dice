

var dadoPlayer1 = rollDice();
var dadoPlayer2 = rollDice();

var fraseResultado = ganadorDice(dadoPlayer1, dadoPlayer2);

//alert("PlayerOne: " + dadoPlayer1 + " - PlayerTwo: " + dadoPlayer2 + ". RESULTADO: " + fraseResultado);

document.querySelector("h1").innerText = fraseResultado;

document.querySelector(".img1").setAttribute("src", "./images/dice"+dadoPlayer1+".png");

document.querySelector(".img2").setAttribute("src", "./images/dice"+dadoPlayer2+".png");


function rollDice() {
    var aleatorio = 1+Math.floor(Math.random()*6);
    return aleatorio;
}

function ganadorDice(play1, play2) {
    if (play1 === play2) {
        return "Draw!";
    }
    if (play1 > play2) {
        return "Player 1 Wins!";
    } else {
        return "Player 2 Wins!";
    }
}

