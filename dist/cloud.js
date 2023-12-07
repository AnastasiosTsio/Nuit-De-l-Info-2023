import { PeaseantMessage } from "./peasantmessage.js";
var Cloud = /** @class */ (function () {
    function Cloud(ctx) {
        this.ctx = ctx;
        this.isCloudVisible = true;
        this.message = new PeaseantMessage();
    }
    Cloud.prototype.drawCloud = function () {
        if (this.isCloudVisible) {
            this.ctx.fillStyle = "black";
            this.ctx.font = "16px Arial";
            this.ctx.strokeRect(350, 100, 400, 100);
            this.ctx.fillText(this.message.message, 380, 150);
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
