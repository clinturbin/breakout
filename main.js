let canvas = document.querySelector(".myCanvas");
let ctx = canvas.getContext("2d");
let xCoordinate = canvas.width / 2;
let yCoordinate = canvas.height - 30;
let xIncrease = 2;
let yIncrease = -2;
let ballRadius = 10;
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", (event) => {
    keyDownHandler(event);
});
document.addEventListener("keyup", (event) => {
    keyUpHandler(event);
});

let keyDownHandler = (event) => {
    if (event.keyCode === 39) {
        rightPressed = true;
    } else if (event.keyCode === 37) {
        leftPressed = true;
    }
};

let keyUpHandler = (event) => {
    if (event.keyCode === 39) {
        rightPressed = false;
    } else if (event.keyCode === 37) {
        leftPressed = false;
    }
};

let drawBall = () => {
    ctx.beginPath();
    ctx.arc(xCoordinate, yCoordinate, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
};

let drawPaddle = () => {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
};

let checkCircleBorders = () => {
    if (xCoordinate + xIncrease > canvas.width - ballRadius || xCoordinate + xIncrease < ballRadius) {
        xIncrease = -xIncrease;
    }
    if (yCoordinate + yIncrease < ballRadius) {
        yIncrease = -yIncrease;
    } else if (yCoordinate + yIncrease > canvas.height - ballRadius) {
        if (xCoordinate > paddleX && xCoordinate < paddleX + paddleWidth) {
            yIncrease = -yIncrease;
        } else {
            alert("GAME OVER");
            document.location.reload();
        }
    }
};

let checkPaddleBorders = () => {
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
};

let draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    checkCircleBorders();
    checkPaddleBorders();
    xCoordinate += xIncrease;
    yCoordinate += yIncrease;
};

setInterval(draw, 10);