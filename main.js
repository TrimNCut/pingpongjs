let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let ballX = 30;
let ballY = 30;
let dir = 1;
let velx = (Math.round((10 * Math.random())) % 4)+3;
let vely = (Math.round((10 * Math.random())) % 4)+3;

let paddleY = 490;
let paddleX = 190;

let head = document.querySelector("h1");

let score = 0;

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

function collision(){
    if ((ballX > paddleX+120) && (ballY > paddleY+12) && ballX < paddleX && ballY < paddleY){
        return false;
    }
    else if ((ballX >= paddleX && ballY >= paddleY)){
        return true;
    }   
}

function wallcollision(){
    if ((ballX >= 495) || (ballY <= 10) || (ballX <= 5)){
        return true;
    }       
}

setInterval( () => {

    ballX += dir * velx;
    ballY += dir * vely;

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (collision()){
        dir = -1;
        velx = (Math.round((10 * Math.random())) % 4)+3;
        vely = (Math.round((10 * Math.random())) % 4)+3;
        score += 1;
    }
    if (wallcollision()){
        dir *= -1;
        velx = (Math.round((10 * Math.random())) % 4)+3;
        vely = (Math.round((10 * Math.random())) % 4)+3;
    }

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

    head.innerHTML = "Ping Pong - "+score;

}, 1000/60);