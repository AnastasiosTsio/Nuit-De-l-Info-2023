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
        ctx.fillStyle = "blue";
        ctx.fillRect(player.x, player.y, player.width, player.height);
    };
    Player.prototype.movePlayer = function (event) {
        switch (event.key) {
            case "ArrowLeft":
                player.x -= player.speed;
                break;
            case "ArrowRight":
                player.x += player.speed;
                break;
            case "ArrowUp":
                player.y -= player.speed;
                break;
            case "ArrowDown":
                player.y += player.speed;
                break;
        }
    };
    return Player;
}());
exports.Player = Player;
