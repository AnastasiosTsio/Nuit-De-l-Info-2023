var Scenario = /** @class */ (function () {
    function Scenario() {
        this.numberOfInhabitant = 1000,
            this.globalHealth = 100,
            this.globalMoney = 1000,
            this.averageTemperature = 27;
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
