import { PeasantMessage } from "./peasantmessage.js";
var Cloud = /** @class */ (function () {
    function Cloud(ctx) {
        this.ctx = ctx;
        this.isCloudVisible = true;
        this.messanger = new PeasantMessage();
    }
    Cloud.prototype.drawCloud = function () {
        console.log("drawCloud");
        this.ctx.fillStyle = "white";
        this.ctx.font = "16px Arial";
        this.ctx.fillRect(350, 100, 400, 100);
        this.ctx.fillStyle = "black";
        console.log(this.getCurrentMessage().toString());
        this.ctx.fillText(this.getCurrentMessage(), 380, 150);
        if (this.isCloudVisible) {
            var text = this.getCurrentMessage();
            this.ctx.font = "18px Arial";
            var textWidth = this.ctx.measureText(text).width;
            var cloudWidth = textWidth + 30; // Adjust as needed
            var cloudHeight = 100; // Adjust as needed
            this.ctx.fillStyle = "white";
            var canvas = document.getElementById("gameCanvas");
            this.ctx.fillRect(canvas.width - cloudWidth, 50, cloudWidth, cloudHeight);
            this.ctx.fillStyle = "black";
            this.ctx.fillText(text, canvas.width - cloudWidth + 15, 100);
        }
    };
    Cloud.prototype.toggleCloudVisibility = function (event) {
        this.isCloudVisible = !this.isCloudVisible;
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
