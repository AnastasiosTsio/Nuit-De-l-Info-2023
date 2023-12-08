import { getQuestionnaireJSON, getQuestionRandom } from "./Questionnaire.js";
var PeaseantMessage = /** @class */ (function () {
    function PeaseantMessage() {
        var _this = this;
        this.id = 0;
        getQuestionnaireJSON().then(function (jsonData) {
            _this.message = getQuestionRandom(jsonData) + _this.id.toString() + ".";
        });
        console.log(this.messages);
    }
    PeaseantMessage.prototype.changeMessage = function (newMessage) {
        this.message = newMessage;
    };
    PeaseantMessage.prototype.loadMessages = function () { };
    PeaseantMessage.prototype.selectNewMessage = function () {
        var _this = this;
        this.id++;
        getQuestionnaireJSON().then(function (jsonData) {
            //this.message = getQuestionByIndex(jsonData, this.id) + this.id.toString() + ".";
            _this.message = getQuestionRandom(jsonData) + _this.id.toString() + ".";
        });
    };
    return PeaseantMessage;
}());
export { PeaseantMessage };
