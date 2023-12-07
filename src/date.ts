export class gameDate {
    date:number;
    ctx:any;

    constructor(date:number,ctx:any) {
        this.date = date;
        this.ctx = ctx;
    }

    getDate() {
        return this.date;
    }

    drawDate() {
        this.ctx.fillStyle = "black";
        this.ctx.font = "30px Arial";
        this.ctx.strokeRect(450, 10, 200, 50);
        this.ctx.fillText(this.date.toString(), 500, 50);
      }

    updateDate(event: any) {
        this.date+=10;
      }
}