import { Scenario } from "./scenario";
function GetConstantEffect() {
    if (Scenario.environment < 100 || Scenario.globalHealth < 100) {
        var i = 100 - (Scenario.environment + Scenario.globalHealth);
        if (Scenario.numberOfInhabitant > i) {
            Scenario.numberOfInhabitant -= i;
        }
        else {
            Scenario.numberOfInhabitant = 0;
        }
    }
    else if (Scenario.numberOfInhabitant > 10000) {
        Scenario.frustration += 10;
        Scenario.globalMoney += 50;
        if (Scenario.environment > 10) {
            Scenario.environment -= 10;
        }
        else {
            Scenario.environment = 0;
        }
    }
    else if (Scenario.numberOfInhabitant < 100) {
        if (Scenario.development > 10) {
            Scenario.development -= 10;
        }
        else {
            Scenario.development = 0;
        }
    }
}
// fonction à appeler à la fin de chaque question qui gère 
// les effets dependants des variables globales et les met à jour
