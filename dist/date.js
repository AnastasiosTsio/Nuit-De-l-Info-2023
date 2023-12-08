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
        this.ctx.font = "50px Boulder";
        var canvas = document.getElementById("gameCanvas");
        this.ctx.fillText(this.date.toString(), canvas.width - 115, 40);
    };
    gameDate.prototype.updateDate = function (event) {
        this.date += 10;
    };
    return gameDate;
}());
export { gameDate };
