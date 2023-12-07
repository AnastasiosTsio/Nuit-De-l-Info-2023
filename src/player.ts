export class Player {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.x = 50;
    this.y = 50;
    this.width = 50;
    this.height = 50;
    this.speed = 5;
    this.ctx = ctx;
  }

  drawPlayer() {
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  movePlayer(event: any) {
    switch (event.key) {
      case "ArrowLeft":
        this.x -= this.speed;
        break;
      case "ArrowRight":
        this.x += this.speed;
        break;
      case "ArrowUp":
        this.y -= this.speed;
        break;
      case "ArrowDown":
        this.y += this.speed;
        break;
    }
  }
}
