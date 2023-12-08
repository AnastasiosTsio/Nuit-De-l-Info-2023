import { PeasantMessage } from "./peasantmessage.js";
import { Question } from "./question.js";

export class Expert {
  ctx: any;
  isExpertVisible: boolean;
  oldAdvice: string;
  validAnswer: boolean;
  constructor(ctx: any) {
    this.ctx = ctx;
    this.isExpertVisible = false;
  }

  drawExpert() {
    if (this.isExpertVisible) {
      const text = this.oldAdvice;
      const padding = 15;

      this.ctx.font = "18px Arial";
      const textWidth = this.ctx.measureText(text).width;

      const ExpertWidth = textWidth + padding * 2; // Increase the Expert width
      const ExpertHeight = 150; // Increase the Expert height

      const canvas: any = document.getElementById("gameCanvas");
      // centered horizontally
      const x = (canvas.width - ExpertWidth) / 2 + 50;
      const y = 370;
      this.ctx.beginPath();
      this.ctx.moveTo(x + 20, y + 50);
      this.ctx.quadraticCurveTo(x, y + 50, x, y + 75);
      this.ctx.quadraticCurveTo(x, y + 100, x + 25, y + 100);
      this.ctx.lineTo(x + ExpertWidth - 25, y + 100);
      this.ctx.quadraticCurveTo(
        x + ExpertWidth,
        y + 100,
        x + ExpertWidth,
        y + 75
      );
      this.ctx.quadraticCurveTo(
        x + ExpertWidth,
        y + 50,
        x + ExpertWidth - 20,
        y + 50
      );
      this.ctx.closePath();
      // Draw Expert shape
      this.ctx.beginPath();
      this.ctx.moveTo(x + 20, y + 50);
      this.ctx.quadraticCurveTo(x, y + 50, x, y + 75);
      this.ctx.quadraticCurveTo(x, y + 100, x + 25, y + 100);
      this.ctx.lineTo(x + ExpertWidth - 25, y + 100);
      this.ctx.quadraticCurveTo(
        x + ExpertWidth,
        y + 100,
        x + ExpertWidth,
        y + 75
      );
      this.ctx.quadraticCurveTo(
        x + ExpertWidth,
        y + 50,
        x + ExpertWidth - 20,
        y + 50
      );
      this.ctx.closePath();
      if (this.validAnswer) {
        this.ctx.fillStyle = "#73ED6D";
      } else {
        this.ctx.fillStyle = "#F56D6D";
      }
      this.ctx.fill();
      this.ctx.fillStyle = "black";
      this.ctx.fillText(text, x + padding, y + 95 - padding);
    }
  }

  setVisible() {
    this.isExpertVisible = true;
  }

  public getCurrentExpertAdvice(ques: Question, choice: boolean) {
    this.oldAdvice = ques.explication;
    this.validAnswer = ques.reponse == choice;
  }
}
