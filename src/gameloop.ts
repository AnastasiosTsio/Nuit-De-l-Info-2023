import { Cloud } from "./cloud.js";
import { gameDate } from "./date.js";
import { Player } from "./player.js";

const canvas: any = document.getElementById("gameCanvas");
const ctx: any = canvas.getContext("2d");
let cloud = new Cloud(ctx);
let player = new Player(ctx);
let date = new gameDate(1965, ctx);

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateGame() {
  clearCanvas();
  date.drawDate();
  player.drawPlayer();
  if (cloud.isCloudVisible) cloud.drawCloud();
  requestAnimationFrame(updateGame);
}

const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
noButton.addEventListener("click", cloud.changeMessage.bind(cloud));
noButton.addEventListener("click", date.updateDate.bind(date));
yesButton.addEventListener("click", date.updateDate.bind(date));
updateGame();
