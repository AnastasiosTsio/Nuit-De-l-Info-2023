import { Jauge } from "./jauge";
var numberOfInhabitant;
var globalHealth;
var environment;
var globalMoney;
var frustration;
var ressources;
var a;
var nbhabbeg;
function GetUpdateVar() {
    nbhabbeg = 5;
    a = 2;
    Jauge.EtNumberOfInhabitant = Jauge.EtNumberOfInhabitant * ((a + numberOfInhabitant) / a) * ((5 + Jauge.EtGlobalHealth) / 5);
    Jauge.EtGlobalMoney = Jauge.EtGlobalMoney * (numberOfInhabitant / nbhabbeg) * ((a * globalMoney) / a);
    Jauge.EtEnvironment = Jauge.EtEnvironment * (1 + (((30 - environment) / 10) * (numberOfInhabitant / nbhabbeg)));
    Jauge.EtHappiness = Jauge.EtHappiness * ((10 - frustration) / 10) * ((5 + Jauge.EtGlobalHealth) / 5);
    Jauge.EtRessources = Jauge.EtRessources - (numberOfInhabitant / nbhabbeg) * ressources * 0.1;
    Jauge.EtGlobalHealth = Jauge.EtGlobalHealth * ((5 + globalHealth) / 5) * ((6 + Jauge.EtEnvironment) / 6);
}
