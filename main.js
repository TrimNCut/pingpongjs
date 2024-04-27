let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let ballX = 30;
let ballY = 30;

let paddleY = 460;
let paddleX = 190;

function drawPaddle(){
    ctx.fillStyle = "black";
    ctx.rect(paddleX, paddleY, 120, 12);
    ctx.fillRect(paddleX, paddleY, 120, 12);
}

function drawBall(){
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(ballX, ballY, 7, 0, 2 * Math.PI);
    ctx.fill();
}

setInterval( () => {

    ballX += 5;
    ballY += 5;

    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fill();

    drawBall();

    drawPaddle();

    window.addEventListener('mousemove', (e) => {
        if (e.clientX <= 780){
            paddleX = 2;
        } else if(e.clientX >= 1155){
            paddleX = 378;
        } else{
            paddleX = (e.clientX - canvas.width) - 280;
        }
    });

}, 1000/60);