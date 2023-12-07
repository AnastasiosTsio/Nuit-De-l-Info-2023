"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloud = void 0;
var Cloud = /** @class */ (function () {
    function Cloud(ctx) {
        this.ctx = ctx;
        this.isCloudVisible = false;
    }
    Cloud.prototype.drawCloud = function () {
        if (this.isCloudVisible) {
            this.ctx.fillStyle = "black";
            this.ctx.font = "16px Arial";
            this.ctx.strokeRect(350, 100, 400, 100);
            this.ctx.fillText("You have a decision to make", 380, 150);
            this.ctx.fillText("(Right click to close)", 380, 170);
        }
    };
    Cloud.prototype.toggleCloudVisibility = function (event) {
        this.isCloudVisible = !this.isCloudVisible;
    };
    return Cloud;
}());
exports.Cloud = Cloud;
