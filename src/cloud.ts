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

  drawCloud() {
    if (this.isCloudVisible) {
      const text = this.getCurrentMessage();
          
      this.ctx.font = "18px Arial";
      const textWidth = this.ctx.measureText(text).width;

      const cloudWidth = textWidth + 30; // Adjust as needed
      const cloudHeight = 100; // Adjust as needed

      this.ctx.fillStyle = "#C7E8CA";
      const canvas: any = document.getElementById("gameCanvas");     
      this.ctx.fillRect(canvas.width - cloudWidth, 50, cloudWidth, cloudHeight);
      this.ctx.fillStyle = "black";
      this.ctx.fillText(text, canvas.width - cloudWidth + 15, 100);


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
