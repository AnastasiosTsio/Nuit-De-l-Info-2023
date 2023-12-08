import { PeasantMessage } from "./peasantmessage.js";

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
    console.log("drawCloud");

    this.ctx.fillStyle = "white";
    this.ctx.font = "16px Arial";
    this.ctx.fillRect(350, 100, 400, 100);
    this.ctx.fillStyle = "black";
    console.log(this.getCurrentMessage().toString());
    this.ctx.fillText(this.getCurrentMessage(), 380, 150);
  }

  toggleCloudVisibility(event: any) {
    this.isCloudVisible = !this.isCloudVisible;
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
