import { PeaseantMessage } from "./peasantmessage.js";
var Cloud = /** @class */ (function () {
    function Cloud(ctx) {
        this.ctx = ctx;
        this.isCloudVisible = true;
        this.message = new PeaseantMessage();
    }
    Cloud.prototype.drawCloud = function () {
        if (this.isCloudVisible) {
            var text = this.message.message;
            this.ctx.font = "16px Arial";
            var textWidth = this.ctx.measureText(text).width;
            var cloudWidth = textWidth + 30; // Adjust as needed
            var cloudHeight = 100; // Adjust as needed
            this.ctx.fillStyle = "white";
            this.ctx.fillRect(750, 50, cloudWidth, cloudHeight);
            this.ctx.fillStyle = "black";
            this.ctx.fillText(text, 760, 100);
        }
    };
    Cloud.prototype.toggleCloudVisibility = function (event) {
        this.isCloudVisible = !this.isCloudVisible;
    };
    Cloud.prototype.changeMessage = function () {
        this.message.selectNewMessage();
    };
    return Cloud;
}());
export { Cloud };
