const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 448;
canvas.height = 400;

//variables del juego
let counter = 0;

// variables de la pelota
const ballRadius = 4; //tamaño de la pelota

/* saber su pocision (lo hacemos con LET porque va a ir cambiando de valor.)*/
let x = canvas.width / 2
let y = canvas.height - 30
// velocidad de la pelota
let dx = 2
let dy = -2

function drawball() {
    
}
function drawpaddle() {}
function drawbricks() {} 

function collisionDetection() {}
function ballMovement() {}
function paddleMovement() {}

function draw() {
  // dibujando lo pricipal
  drawball(); //pelota
  drawpaddle(); //paddle la barrita para la pelota
  drawbricks(); //luego los bricks

  //movimientos y coliciones
  collisionDetection() //detecta si hubo una colision y modifica el estado
  ballMovement() //el movimiento de la pelota
  paddleMovement() //el movimiento del paddle

  window.requestAnimationFrame(draw);
}
draw();
