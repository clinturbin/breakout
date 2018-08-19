var canvas = document.querySelector(".myCanvas");
var ctx = canvas.getContext("2d");
var xCoordinate = canvas.width / 2;
var yCoordinate = canvas.height - 30;
var xIncrease = 2;
var yIncrease = -2;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", function (event) {
    keyDownHandler(event);
});
document.addEventListener("keyup", function (event) {
    keyUpHandler(event);
});

var keyDownHandler = function (event) {
    if (event.keyCode === 39) {
        rightPressed = true;
    }
    else if (event.keyCode === 37) {
        leftPressed = true;
    }
};

var keyUpHandler = function (event) {
    if (event.keyCode === 39) {
        rightPressed = false;
    }
    else if (event.keyCode === 37) {
        leftPressed = false;
    }
};

var drawBall = function () {
    ctx.beginPath();
    ctx.arc(xCoordinate, yCoordinate, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
};

var drawPaddle = function () {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
};


var checkCircleBorders = function () {
    if (xCoordinate + xIncrease < ballRadius || xCoordinate + xIncrease > canvas.width - ballRadius) {
        xIncrease = -xIncrease;
    }
    if (yCoordinate + yIncrease < ballRadius || yCoordinate + yIncrease > canvas.height - ballRadius) {
        yIncrease = -yIncrease;
    }
};

var checkPaddleBorders = function () {
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
}

var draw = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    checkCircleBorders();
    checkPaddleBorders();
    xCoordinate += xIncrease;
    yCoordinate += yIncrease;
};

setInterval(draw, 10);


/* 
// Print a red square to the canvas
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

// Print a green circle
ctx.beginPath();
ctx.arc(300, 180, 40, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

// Print Blue Stroked Empyt Rectangle
ctx.beginPath();
ctx.rect(160, 30, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
*/