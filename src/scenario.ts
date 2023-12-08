export class Scenario{
    numberOfInhabitant: number;
    globalHealth: number;
    globalMoney: number;
    averageTemperature: number;

    constructor(
    ) {
        this.numberOfInhabitant = 1000,
        this.globalHealth = 100,
        this.globalMoney = 1000,
        this.averageTemperature= 27
    }

    updateScenario(context:number) {
        var toBeAdded = this.parsingContext(context);
        this.numberOfInhabitant += toBeAdded;
        this.globalHealth += toBeAdded;
        this.globalMoney += toBeAdded;
        this.averageTemperature += toBeAdded;
    }

    parsingContext(context:number) {
        var res = 0;
        switch (context) {
            case 1:
                res=5;
                break;
            case 2:
                res=10;
                break;
            default:
                res=0;
                break;
            return res;
        }
    }
}