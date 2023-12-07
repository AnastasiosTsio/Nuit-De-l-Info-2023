
export class Cloud {
  ctx: any;
  isCloudVisible: boolean;
  constructor(ctx: any) {
    this.ctx = ctx;
    this.isCloudVisible = false;
  }

  drawCloud() {
    if (this.isCloudVisible) {
      this.ctx.fillStyle = "black";
      this.ctx.font = "16px Arial";
      this.ctx.strokeRect(350, 100, 400, 100);
      this.ctx.fillText("You have a decision to make", 380, 150);
      this.ctx.fillText("(Right click to close)", 380, 170);
    }
  }

  toggleCloudVisibility(event: any) {
    this.isCloudVisible = !this.isCloudVisible;
  }
}
