var Expert = /** @class */ (function () {
    function Expert(ctx) {
        this.ctx = ctx;
        this.isExpertVisible = false;
    }
    Expert.prototype.drawExpert = function () {
        if (this.isExpertVisible) {
            var text = this.oldAdvice;
            var padding = 15;
            this.ctx.font = "18px Arial";
            var textWidth = this.ctx.measureText(text).width;
            var ExpertWidth = textWidth + padding * 2; // Increase the Expert width
            var ExpertHeight = 150; // Increase the Expert height
            var canvas = document.getElementById("gameCanvas");
            // centered horizontally
            var x = (canvas.width - ExpertWidth) / 2 + 50;
            var y = 370;
            this.ctx.beginPath();
            this.ctx.moveTo(x + 20, y + 50);
            this.ctx.quadraticCurveTo(x, y + 50, x, y + 75);
            this.ctx.quadraticCurveTo(x, y + 100, x + 25, y + 100);
            this.ctx.lineTo(x + ExpertWidth - 25, y + 100);
            this.ctx.quadraticCurveTo(x + ExpertWidth, y + 100, x + ExpertWidth, y + 75);
            this.ctx.quadraticCurveTo(x + ExpertWidth, y + 50, x + ExpertWidth - 20, y + 50);
            this.ctx.closePath();
            // Draw Expert shape
            this.ctx.beginPath();
            this.ctx.moveTo(x + 20, y + 50);
            this.ctx.quadraticCurveTo(x, y + 50, x, y + 75);
            this.ctx.quadraticCurveTo(x, y + 100, x + 25, y + 100);
            this.ctx.lineTo(x + ExpertWidth - 25, y + 100);
            this.ctx.quadraticCurveTo(x + ExpertWidth, y + 100, x + ExpertWidth, y + 75);
            this.ctx.quadraticCurveTo(x + ExpertWidth, y + 50, x + ExpertWidth - 20, y + 50);
            this.ctx.closePath();
            if (this.validAnswer) {
                this.ctx.fillStyle = "#73ED6D";
            }
            else {
                this.ctx.fillStyle = "#F56D6D";
            }
            this.ctx.fill();
            this.ctx.fillStyle = "black";
            this.ctx.fillText(text, x + padding, y + 95 - padding);
        }
    };
    Expert.prototype.setVisible = function () {
        this.isExpertVisible = true;
    };
    Expert.prototype.getCurrentExpertAdvice = function (ques, choice) {
        this.oldAdvice = ques.explication;
        this.validAnswer = ques.reponse == choice;
    };
    return Expert;
}());
export { Expert };
