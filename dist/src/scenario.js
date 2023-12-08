var Scenario = /** @class */ (function () {
    function Scenario(numberOfInhabitant, globalHealth, globalMoney, averageTemperature) {
        if (numberOfInhabitant === void 0) { numberOfInhabitant = 1000; }
        if (globalHealth === void 0) { globalHealth = 100; }
        if (globalMoney === void 0) { globalMoney = 1000; }
        if (averageTemperature === void 0) { averageTemperature = 27; }
        this.numberOfInhabitant = numberOfInhabitant;
        this.globalHealth = globalHealth;
        this.globalMoney = globalMoney;
        this.averageTemperature = averageTemperature;
    }
    Scenario.prototype.updateScenario = function (context) {
        var toBeAdded = this.parsingContext(context);
        this.numberOfInhabitant += toBeAdded;
        this.globalHealth += toBeAdded;
        this.globalMoney += toBeAdded;
        this.averageTemperature += toBeAdded;
    };
    Scenario.prototype.parsingContext = function (context) {
        var res = 0;
        switch (context) {
            case 1:
                res = 5;
                break;
            case 2:
                res = 10;
                break;
            default:
                res = 0;
                break;
                return res;
        }
    };
    return Scenario;
}());
export { Scenario };
