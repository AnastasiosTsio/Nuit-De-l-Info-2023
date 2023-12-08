import { PeasantMessage } from "./peasantmessage.js";
var Cloud = /** @class */ (function () {
    function Cloud(ctx) {
        this.ctx = ctx;
        this.isCloudVisible = true;
        this.messanger = new PeasantMessage();
    }
    Cloud.prototype.drawCloud = function () {
        if (this.isCloudVisible) {
            var text = this.getCurrentMessage();
            this.ctx.font = "18px Arial";
            var textWidth = this.ctx.measureText(text).width;
            var cloudWidth = textWidth + 30; // Adjust as needed
            var cloudHeight = 100; // Adjust as needed
            this.ctx.fillStyle = "#C7E8CA";
            var canvas = document.getElementById("gameCanvas");
            this.ctx.fillRect(canvas.width - cloudWidth, 50, cloudWidth, cloudHeight);
            this.ctx.fillStyle = "black";
            this.ctx.fillText(text, canvas.width - cloudWidth + 15, 100);
        }
    };
    Cloud.prototype.toggleCloudVisibility = function (event) {
        this.isCloudVisible = !this.isCloudVisible;
    };
    Cloud.prototype.getCurrentDilemma = function () {
        return this.messanger.message;
    };
    Cloud.prototype.getCurrentMessage = function () {
        if (this.messanger.message === null) {
            return "No message available";
        }
        return this.messanger.message.question;
    };
    Cloud.prototype.changeMessage = function () {
        this.messanger.selectNewMessage();
    };
    return Cloud;
}());
export { Cloud };
