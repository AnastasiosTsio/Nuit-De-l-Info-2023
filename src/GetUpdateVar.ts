import { Scenario } from "./scenario";
 var numberOfInhabitant : number;
 var globalHealth : number;
 var environment : number;
 var globalMoney : number;
 var frustration : number;
 var ressources : number;
 var a : number;
 var nbhabbeg : number;


 function GetUpdateVar () {
    nbhabbeg=5;
    a=2;
    EtNumberOfInhabitant=EtNumberOfInhabitant*((a+numberOfInhabitant)/a)*((a+numberOfInhabitant)/a);
    EtGlobalMoney=EtGlobalMoney*(numberOfInhabitant/nbhabbeg)*((a*globalMoney)/a);
    EtEnvironment=EtEnvironment*(1+(((30-environment)/10)*(numberOfInhabitant/nbhabbeg)));
    EtHappiness=EtHappiness*((10-frustration)/10)*((+globalHealth)/);
    EtRessources=EtRessources-(numberOfInhabitant/nbhabbeg)




 }
// fonction à appeler à la fin de chaque question qui gère 
// les effets dependants des variables globales et les met à jour

