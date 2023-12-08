import { Cloud } from "./cloud.js";
import { gameDate } from "./date.js";
import { Scenario } from "./scenario.js";
import { healBar } from "./healtbar.js";
var canvas = document.getElementById("gameCanvas");
var cloud = new Cloud();
var date = new gameDate(1965);
var scenario = new Scenario();
var healthBar = new healBar(scenario, document.getElementById("healthFill"));
canvas.width = (window.innerWidth / 10) * 9;
var backgroundImageIndex = 0;
var backgroundImages = [
    "url('images/paysage-1.png')",
    "url('images/paysage-2.png')",
    "url('images/paysage-3.png')",
    "url('images/paysage-4.png')",
    "url('images/paysage-0.png') ",
];
function cyclebg() {
    console.log("cyclebg");
    document.body.style.backgroundImage = backgroundImages[backgroundImageIndex];
    backgroundImageIndex = (backgroundImageIndex + 1) % backgroundImages.length;
}
function updateGame() {
    date.drawDate();
    console.log(cloud.isCloudVisible);
    cloud.drawCloud();
    requestAnimationFrame(updateGame);
    healthBar.checkEnd();
}
function makeAChoice(choice) {
    scenario.updateScenario(cloud.getCurrentDilemma(), choice);
    cloud.changeMessage();
    healthBar.changeHealthBar();
}
var noButton = document.getElementById("noButton");
var yesButton = document.getElementById("yesButton");
noButton.addEventListener("click", cloud.changeMessage.bind(cloud));
yesButton.addEventListener("click", function () {
    healthBar.changeHealthBar();
    healthBar.updateHealthBar();
});
yesButton.addEventListener("click", makeAChoice.bind(this, true));
noButton.addEventListener("click", makeAChoice.bind(this, false));
yesButton.addEventListener("click", cloud.changeMessage.bind(cloud));
yesButton.addEventListener("click", date.updateDate.bind(date));
updateGame();
