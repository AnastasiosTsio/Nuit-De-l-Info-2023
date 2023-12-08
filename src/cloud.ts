import { PeaseantMessage } from "./peasantmessage.js";

export class Cloud {
  ctx: any;
  isCloudVisible: boolean;
  message: PeaseantMessage;
  constructor(ctx: any) {
    this.ctx = ctx;
    this.isCloudVisible = true;
    this.message = new PeaseantMessage();
  }

  drawCloud() {
    if (this.isCloudVisible) {
      const text = this.message.message;
          
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

  changeMessage() {
    this.message.selectNewMessage();
  }
}
