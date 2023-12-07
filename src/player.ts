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
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);
  }

  movePlayer(event: any) {
    switch (event.key) {
      case "ArrowLeft":
        player.x -= player.speed;
        break;
      case "ArrowRight":
        player.x += player.speed;
        break;
      case "ArrowUp":
        player.y -= player.speed;
        break;
      case "ArrowDown":
        player.y += player.speed;
        break;
    }
  }
}
