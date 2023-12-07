"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(ctx) {
        this.x = 50;
        this.y = 50;
        this.width = 50;
        this.height = 50;
        this.speed = 5;
        this.ctx = ctx;
    }
    Player.prototype.drawPlayer = function () {
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    Player.prototype.movePlayer = function (event) {
        switch (event.key) {
            case "ArrowLeft":
                this.x -= this.speed;
                break;
            case "ArrowRight":
                this.x += this.speed;
                break;
            case "ArrowUp":
                this.y -= this.speed;
                break;
            case "ArrowDown":
                this.y += this.speed;
                break;
        }
    };
    return Player;
}());
exports.Player = Player;
