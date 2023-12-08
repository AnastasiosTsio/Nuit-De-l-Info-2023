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
    EtNumberOfInhabitant = EtNumberOfInhabitant * ((a + numberOfInhabitant) / a) * ((a + numberOfInhabitant) / a);
    EtGlobalMoney = EtGlobalMoney * (numberOfInhabitant / nbhabbeg) * ((a * globalMoney) / a);
    EtEnvironment = EtEnvironment * (1 + (((30 - environment) / 10) * (numberOfInhabitant / nbhabbeg)));
    EtHappiness = EtHappiness * ((10 - frustration) / 10) * ((+globalHealth) / );
    EtRessources = EtRessources - (numberOfInhabitant / nbhabbeg);
}
export {};
// fonction à appeler à la fin de chaque question qui gère 
// les effets dependants des variables globales et les met à jour
