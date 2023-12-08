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
    EtNumberOfInhabitant = EtNumberOfInhabitant * ((a + numberOfInhabitant) / a) * ((5 + ETglobalHealth) / 5);
    EtGlobalMoney = EtGlobalMoney * (numberOfInhabitant / nbhabbeg) * ((a * globalMoney) / a);
    EtEnvironment = EtEnvironment * (1 + (((30 - environment) / 10) * (numberOfInhabitant / nbhabbeg)));
    EtHappiness = EtHappiness * ((10 - frustration) / 10) * ((5 + ETglobalHealth) / 5);
    EtRessources = EtRessources - (numberOfInhabitant / nbhabbeg) * ressources * 0.1;
    EtglobalHealth = EtglobalHealth * ((5 + globalHealth) / 5) * ((6 + EtEnvironment) / 6);
}
export {};
