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
        
        this.ctx.font = "16px Arial";
        const textWidth = this.ctx.measureText(text).width;

        const cloudWidth = textWidth + 30; // Adjust as needed
        const cloudHeight = 100; // Adjust as needed

        this.ctx.fillStyle = "white";
        this.ctx.fillRect(750, 50, cloudWidth, cloudHeight);

        this.ctx.fillStyle = "black";
        this.ctx.fillText(text, 760, 100);
    }
  }

  toggleCloudVisibility(event: any) {
    this.isCloudVisible = !this.isCloudVisible;
  }

  changeMessage() {
    this.message.selectNewMessage();
  }
}
