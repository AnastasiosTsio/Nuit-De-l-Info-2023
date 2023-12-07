export class Scenario{
    numberOfInhabitant: number;
    globalHealth: number;
    globalMoney: number;
    averageTemperature: number;

    constructor(
        numberOfInhabitant: number = 1000,
        globalHealth: number = 100,
        globalMoney: number = 1000,
        averageTemperature: number = 27
    ) {
        this.numberOfInhabitant = numberOfInhabitant;
        this.globalHealth = globalHealth;
        this.globalMoney = globalMoney;
        this.averageTemperature = averageTemperature;
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