var gameDate = /** @class */ (function () {
    function gameDate(date) {
        this.date = date;
    }
    gameDate.prototype.getDate = function () {
        return this.date;
    };
    gameDate.prototype.drawDate = function () {
        // this.ctx.fillStyle = "black";
        // this.ctx.font = "70px Boulder";
        var dateContainer = document.getElementById("date");
        dateContainer.innerHTML = this.date;
    };
    gameDate.prototype.updateDate = function (event) {
        this.date += 10;
    };
    return gameDate;
}());
export { gameDate };
