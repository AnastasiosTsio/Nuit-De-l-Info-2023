import { Scenario } from "./scenario";

export class richessBar {
  checkEnd() {
    if (this.richesse === 0) {
      alert("Vous avez perdu");
      changePage('index.html');
    }
  }
    richesse: number;
    richesseBar: any;
    scenario: Scenario;

    constructor(scenario: any, richesseBar: any) {
        this.richesse = scenario.argent;
        this.richesseBar = richesseBar;
    }

  // Function to get color based on richesse level
  getColorForRichesse(richesse: number) {
    // Example: interpolate between green (100%) and red (0%)
    const green = 255;
    const red = 255 - Math.round((richesse / 100) * 255);
    return `rgb(${red}, ${green}, 0)`;
}
  // Function to update the richesse bar based on the richesse value
  updateRichesseBar() {
      // Ensure richesse is within the valid range (0 to 100)
      this.richesse = Math.max(0, Math.min(this.richesse, 100));

      // Update the width of the richesse fill element
      this.richesseBar.style.width = this.richesse + '%';

      // Adjust the color based on the richesse level (for example, green to red)
      const color = this.getColorForRichesse(this.richesse);
      this.richesseBar.style.backgroundColor = color;
  }

  changeRichesseBar() {
      this.updateRichesseBar();
  }
}
