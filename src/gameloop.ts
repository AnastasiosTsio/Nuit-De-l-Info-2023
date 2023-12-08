import { Cloud } from "./cloud.js";
import { gameDate } from "./date.js";
import { Player } from "./player.js";
import { Scenario } from "./scenario.js";
import { healBar } from "./healtbar.js";

const canvas: any = document.getElementById("gameCanvas");
const ctx: any = canvas.getContext("2d");
let cloud = new Cloud(ctx);
let player = new Player(ctx);
let date = new gameDate(1965, ctx);
let scenario = new Scenario();
let healthBar = new healBar(scenario, document.getElementById("healthFill"));

canvas.width = (window.innerWidth / 10) * 9;

var backgroundImageIndex = 0;
var backgroundImages = [
  "url('images/paysage-1.png')",
  "url('images/paysage-2.png')",
  "url('images/paysage-3.png')",
  "url('images/paysage-4.png')",
  "url('images/paysage-0.png') ",
];
var bg = document.getElementById("changebg");

function cyclebg() {
  console.log("cyclebg");
  document.body.style.backgroundImage = backgroundImages[backgroundImageIndex];
  backgroundImageIndex = (backgroundImageIndex + 1) % backgroundImages.length;
}
bg.addEventListener("click", cyclebg);

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateGame() {
  clearCanvas();
  date.drawDate();
  console.log(cloud.isCloudVisible);
  cloud.drawCloud();
  requestAnimationFrame(updateGame);
}

function makeAChoice(choice : boolean) {
  scenario.updateScenario(cloud.getCurrentDilemma(), choice);
  cloud.changeMessage();
  healthBar.changeHealthBar();
} 

const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
noButton.addEventListener("click", cloud.changeMessage.bind(cloud));
yesButton.addEventListener("click", function () {
  healthBar.changeHealthBar();
  healthBar.updateHealthBar();
});
yesButton.addEventListener("click", cloud.changeMessage.bind(cloud));
noButton.addEventListener("click", date.updateDate.bind(date));
yesButton.addEventListener("click", cloud.changeMessage.bind(cloud));
yesButton.addEventListener("click", date.updateDate.bind(date));

updateGame();
