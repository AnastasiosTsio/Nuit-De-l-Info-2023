import { getQuestionnaireJSON, getQuestionByIndex } from "./Questionnaire.js";
var PeaseantMessage = /** @class */ (function () {
    function PeaseantMessage() {
        var _this = this;
        this.id = 0;
        getQuestionnaireJSON().then(function (jsonData) {
            _this.message = getQuestionByIndex(jsonData, _this.id) + _this.id.toString() + ".";
        });
    }
    PeaseantMessage.prototype.changeMessage = function (newMessage) {
        this.message = newMessage;
    };
    PeaseantMessage.prototype.loadMessages = function () { };
    PeaseantMessage.prototype.selectNewMessage = function () {
        var _this = this;
        this.id++;
        getQuestionnaireJSON().then(function (jsonData) {
            _this.message = getQuestionByIndex(jsonData, _this.id) + _this.id.toString() + ".";
        });
    };
    return PeaseantMessage;
}());
export { PeaseantMessage };
