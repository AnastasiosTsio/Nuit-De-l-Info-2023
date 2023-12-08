

function GetConstantEffect() {
    if (environment<100 || globalHealth<100 ) {
        var i: number = 100-(environment+globalHealth);
        if (numberOfInhabitant>i) {
            numberOfInhabitant-=i;
        }
        else {
            numberOfInhabitant=0;
        }
    }
    else if (numberOfInhabitant>10000) {
        frustration+=10;
        globalMoney+=50;
        if (environment>10) {
            environment-=10;
        }
        else {
            environment=0
        }
        
    }
    else if (numberOfInhabitant<100) {
        if (development>10) {
            development-=10;
        }
        else {
            development=0
        }
        
    }
}
// fonction à appeler à la fin de chaque question qui gère 
// les effets dependants des variables globales et les met à jour

