var gameDate = /** @class */ (function () {
    function gameDate(date, ctx) {
        this.date = date;
        this.ctx = ctx;
    }
    gameDate.prototype.getDate = function () {
        return this.date;
    };
    gameDate.prototype.drawDate = function () {
        this.ctx.fillStyle = "black";
        this.ctx.font = "30px Arial";
        this.ctx.strokeRect(450, 10, 200, 50);
        this.ctx.fillText(this.date.toString(), 500, 50);
    };
    gameDate.prototype.updateDate = function (event) {
        this.date += 10;
    };
    return gameDate;
}());
export { gameDate };
