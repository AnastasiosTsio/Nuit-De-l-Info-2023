import { Cloud } from "./cloud.js";
import { gameDate } from "./date.js";
import { Player } from "./player.js";
import { Scenario } from "./scenario.js";
import { healBar } from "./healtbar.js";
import { Expert } from "./expert.js";

const canvas: any = document.getElementById("gameCanvas");
const ctx: any = canvas.getContext("2d");
let cloud = new Cloud(ctx);
let expert = new Expert(ctx);
let date = new gameDate(1980, ctx);
let scenario = new Scenario();
let healthBar = new healBar(scenario, document.getElementById("healthFill"));

canvas.width = window.innerWidth-100;
canvas.height = window.innerHeight-100 ;

var backgroundImageIndex = 0;
var backgroundImages = [
  "url('images/paysage-1.png')",
  "url('images/paysage-2.png')",
  "url('images/paysage-3.png')",
  "url('images/paysage-4.png')",
  "url('images/paysage-0.png') ",
];


function cyclebg(index: number){
  console.log("cyclebg");
  document.body.style.backgroundImage = backgroundImages[index];
  backgroundImageIndex = (backgroundImageIndex + 1) % backgroundImages.length;
}

function updatebg() {
  console.log("aled"+scenario.etat_environnement);
  if(scenario.etat_environnement > 0.75) {cyclebg(1); console.log("cyclebg");}
  if(scenario.etat_environnement > 1.25) cyclebg(2);
  if(scenario.etat_environnement > 1.75) cyclebg(3);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateGame() {
  clearCanvas();
  date.drawDate();
  expert.drawExpert();
  cloud.drawCloud();
  requestAnimationFrame(updateGame);
  healthBar.checkEnd();
  updatebg();
}

function makeAChoice(choice : boolean) {
  scenario.updateScenario(cloud.getCurrentDilemma(), choice);
  expert.setVisible();
  expert.getCurrentExpertAdvice(cloud.getCurrentDilemma(), choice);
  cloud.changeMessage();
  console.log("scnearia etat env "+scenario.etat_environnement);
  healthBar.changeHealthBar(scenario.etat_environnement);
  cloud.afterFirst = true;
} 

const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
yesButton.addEventListener("click", makeAChoice.bind(this, true));
noButton.addEventListener("click", makeAChoice.bind(this, false));
yesButton.addEventListener("click", date.updateDate.bind(date));
noButton.addEventListener("click", date.updateDate.bind(date));


updateGame();
