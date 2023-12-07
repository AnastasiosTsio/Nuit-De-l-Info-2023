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
        // Draw the head
        this.ctx.beginPath();
        this.ctx.arc(200, 100, 40, 0, 2 * Math.PI);
        this.ctx.fillStyle = "lightblue";
        this.ctx.fill();
        this.ctx.stroke();
        // Draw the body
        this.ctx.beginPath();
        this.ctx.moveTo(200, 140);
        this.ctx.lineTo(200, 250);
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        // Draw the arms
        this.ctx.beginPath();
        this.ctx.moveTo(200, 160);
        this.ctx.lineTo(150, 200);
        this.ctx.moveTo(200, 160);
        this.ctx.lineTo(250, 200);
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        // Draw the legs
        this.ctx.beginPath();
        this.ctx.moveTo(200, 250);
        this.ctx.lineTo(150, 300);
        this.ctx.moveTo(200, 250);
        this.ctx.lineTo(250, 300);
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
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
export { Player };
