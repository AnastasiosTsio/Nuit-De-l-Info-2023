import { Cloud } from "./cloud.js";
import { gameDate } from "./date.js";
import { Player } from "./player.js";
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var cloud = new Cloud(ctx);
var player = new Player(ctx);
var date = new gameDate(1965, ctx);
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function updateGame() {
    clearCanvas();
    date.drawDate();
    player.drawPlayer();
    if (cloud.isCloudVisible)
        cloud.drawCloud();
    requestAnimationFrame(updateGame);
}
var noButton = document.getElementById("noButton");
var yesButton = document.getElementById("yesButton");
noButton.addEventListener("click", cloud.changeMessage.bind(cloud));
noButton.addEventListener("click", date.updateDate.bind(date));
yesButton.addEventListener("click", date.updateDate.bind(date));
updateGame();
