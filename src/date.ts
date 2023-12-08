export class gameDate {
    date:number;

    constructor(date:number) {
        this.date = date;
    }

    getDate() {
        return this.date;
    }

    drawDate() {
        // this.ctx.fillStyle = "black";
        // this.ctx.font = "70px Boulder";
        const dateContainer: any = document.getElementById("date");
        dateContainer.innerHTML = this.date;      
    }

    updateDate(event: any) {
        this.date+=10;
      }
}