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
        this.ctx.font = "70px Boulder";
        const canvas: any = document.getElementById("gameCanvas");
        this.ctx.fillText(this.date.toString(), canvas.width - 750, 70);
      }

    updateDate(event: any) {
        this.date+=5;
      }
}