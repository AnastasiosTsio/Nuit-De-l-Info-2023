import { PeasantMessage } from "./peasantmessage.js";
import { Question } from "./question.js";

export class Cloud {
  ctx: any;
  isCloudVisible: boolean;
  messanger: PeasantMessage;
  constructor(ctx: any) {
    this.ctx = ctx;
    this.isCloudVisible = true;
    this.messanger = new PeasantMessage();
  }
  afterFirst: boolean = false;
  drawCloud() {
  if (this.isCloudVisible) {
    const text = this.getCurrentMessage();
    if(text === "No message available" && this.afterFirst && this.messanger.messages.length === 0) {
      window.location.href = "https://noahkohrs.github.io/NUIT-DE-L-INFO-2023/fin.html";
    }
    const padding = 15;

    this.ctx.font = "18px Arial";
    const textWidth = this.ctx.measureText(text).width;

    const cloudWidth = textWidth + padding * 2  ; // Increase the cloud width
    const cloudHeight = 150; // Increase the cloud height

    const canvas: any = document.getElementById("gameCanvas");
    // centered horizontally
    const x = (canvas.width - cloudWidth) / 2 +50   ;
    const y = 70;

    // Draw cloud shape
    this.ctx.beginPath();
    this.ctx.moveTo(x + 20, y + 50);
    this.ctx.quadraticCurveTo(x, y + 50, x, y + 75);
    this.ctx.quadraticCurveTo(x, y + 100, x + 25, y + 100);
    this.ctx.lineTo(x + cloudWidth - 25, y + 100);
    this.ctx.quadraticCurveTo(x + cloudWidth, y + 100, x + cloudWidth, y + 75);
    this.ctx.quadraticCurveTo(x + cloudWidth, y + 50, x + cloudWidth - 20, y + 50);
    this.ctx.closePath();

    this.ctx.fillStyle = "#AFD6EC";
    this.ctx.fill();
    this.ctx.fillStyle = "black";
    this.ctx.fillText(text, x + padding, y + 95 - padding);
  }
}


  toggleCloudVisibility(event: any) {
    this.isCloudVisible = !this.isCloudVisible;
  }
  public getCurrentDilemma() : Question {
    return this.messanger.message;
  }
  private getCurrentMessage(): string {
    if (this.messanger.message === null) {
      return "No message available";
    }
    return this.messanger.message.question;
  }

  changeMessage() {
    this.messanger.selectNewMessage();
  }
}
