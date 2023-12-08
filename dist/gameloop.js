import { Cloud } from "./cloud.js";
import { gameDate } from "./date.js";
import { Player } from "./player.js";
import { Scenario } from "./scenario.js";
import { healBar } from "./healtbar.js";
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var cloud = new Cloud(ctx);
var player = new Player(ctx);
var date = new gameDate(1980, ctx);
var scenario = new Scenario();
var healthBar = new healBar(scenario, document.getElementById("healthFill"));
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;
var backgroundImageIndex = 0;
var backgroundImages = [
    "url('images/paysage-1.png')",
    "url('images/paysage-2.png')",
    "url('images/paysage-3.png')",
    "url('images/paysage-4.png')",
    "url('images/paysage-0.png') ",
];
function cyclebg(index) {
    console.log("cyclebg");
    document.body.style.backgroundImage = backgroundImages[index];
    backgroundImageIndex = (backgroundImageIndex + 1) % backgroundImages.length;
}
function updatebg() {
    console.log("aled" + scenario.etat_environnement);
    if (scenario.etat_environnement > 0.75) {
        cyclebg(1);
        console.log("cyclebg");
    }
    if (scenario.etat_environnement > 1.25)
        cyclebg(2);
    if (scenario.etat_environnement > 1.75)
        cyclebg(3);
    if (scenario.etat_environnement > 2)
        cyclebg(4);
}
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function updateGame() {
    clearCanvas();
    date.drawDate();
    cloud.drawCloud();
    requestAnimationFrame(updateGame);
    healthBar.checkEnd();
    updatebg();
}
function makeAChoice(choice) {
    scenario.updateScenario(cloud.getCurrentDilemma(), choice);
    cloud.changeMessage();
    console.log("scnearia etat env " + scenario.etat_environnement);
    healthBar.changeHealthBar(scenario.etat_environnement);
}
var noButton = document.getElementById("noButton");
var yesButton = document.getElementById("yesButton");
yesButton.addEventListener("click", makeAChoice.bind(this, true));
noButton.addEventListener("click", makeAChoice.bind(this, false));
yesButton.addEventListener("click", date.updateDate.bind(date));
noButton.addEventListener("click", date.updateDate.bind(date));
updateGame();
