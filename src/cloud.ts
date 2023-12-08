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
      this.ctx.fillStyle = "white";
      this.ctx.font = "16px Arial";
      this.ctx.fillRect(350, 100, 400, 100);
      this.ctx.fillStyle = "black";
      this.ctx.fillText(this.message.message, 380, 150);
    }
  }

  toggleCloudVisibility(event: any) {
    this.isCloudVisible = !this.isCloudVisible;
  }

  changeMessage() {
    this.message.selectNewMessage();
  }
}
