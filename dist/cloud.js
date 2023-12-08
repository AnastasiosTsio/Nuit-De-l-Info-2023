import { PeasantMessage } from "./peasantmessage.js";
var Cloud = /** @class */ (function () {
    function Cloud() {
        this.isCloudVisible = true;
        this.messanger = new PeasantMessage();
    }
    Cloud.prototype.drawCloud = function () {
        if (this.isCloudVisible) {
            var text = this.getCurrentMessage();
            var padding = 15;
            // this.ctx.font = "18px Arial";
            // const textWidth = this.ctx.measureText(text).width;
            // const cloudWidth = textWidth + padding * 2  ; // Increase the cloud width
            // const cloudHeight = 150; // Increase the cloud height
            var cloudMessage = document.getElementById("messageText");
            // Draw cloud shape
            // this.ctx.beginPath();
            // this.ctx.moveTo(x + 20, y + 50);
            // this.ctx.quadraticCurveTo(x, y + 50, x, y + 75);
            // this.ctx.quadraticCurveTo(x, y + 100, x + 25, y + 100);
            // this.ctx.lineTo(x + cloudWidth - 25, y + 100);
            // this.ctx.quadraticCurveTo(x + cloudWidth, y + 100, x + cloudWidth, y + 75);
            // this.ctx.quadraticCurveTo(x + cloudWidth, y + 50, x + cloudWidth - 20, y + 50);
            // this.ctx.closePath();
            // this.ctx.fillStyle = "#AFD6EC";
            // this.ctx.fill();
            // this.ctx.fillStyle = "black";
            // this.ctx.fillText(text, x + padding, y + 95 - padding);
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
