let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box
}

function criarBG() {
  context.fillStyle = "#63dec3";
  context.fillRect(0, 0, 16*box, 16*box);
}

function criarCobrinha(){
  
}

criarBG();