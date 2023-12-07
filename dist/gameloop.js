var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var player = { x: 50, y: 50, width: 50, height: 50, speed: 5 };
function drawPlayer() {
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function updateGame() {
    clearCanvas();
    drawPlayer();
    requestAnimationFrame(updateGame);
}
function movePlayer(event) {
    switch (event.key) {
        case "ArrowLeft":
            player.x -= player.speed;
            break;
        case "ArrowRight":
            player.x += player.speed;
            break;
        case "ArrowUp":
            player.y -= player.speed;
            break;
        case "ArrowDown":
            player.y += player.speed;
            break;
    }
}
document.addEventListener("keydown", movePlayer);
updateGame();
