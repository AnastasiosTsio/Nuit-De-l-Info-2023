var PeaseantMessage = /** @class */ (function () {
    function PeaseantMessage() {
        this.id = 0;
        this.message = "Hello, I am a peasant " + this.id.toString() + ".";
    }
    PeaseantMessage.prototype.changeMessage = function (newMessage) {
        this.message = newMessage;
    };
    PeaseantMessage.prototype.loadMessages = function () { };
    PeaseantMessage.prototype.selectNewMessage = function () {
        this.id++;
        this.changeMessage("I am a peasant " + this.id.toString() + ".");
    };
    return PeaseantMessage;
}());
export { PeaseantMessage };
