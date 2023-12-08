import { Scenario } from "./scenario";

export class boneurBar {
  checkEnd() {
    if (this.bonheur === 0) {
      alert("Vous avez perdu");
      changePage('index.html');
    }
  }
    bonheur: number;
    bonheurBar: any;
    scenario: Scenario;

    constructor(scenario: any, bonheurBar: any) {
        this.bonheur = scenario.bonheur;
        this.bonheurBar = bonheurBar;
    }

  // Function to get color based on bonheur level
  getColorForBonheur(bonheur: number) {
    // Example: interpolate between green (100%) and red (0%)
    const green = 255;
    const red = 255 - Math.round((bonheur / 100) * 255);
    return `rgb(${red}, ${green}, 0)`;
}
  // Function to update the bonheur bar based on the bonheur value
  updateBonheurBar() {
      // Ensure bonheur is within the valid range (0 to 100)
      this.bonheur = Math.max(0, Math.min(this.bonheur, 100));

      // Update the width of the bonheur fill element
      this.bonheurBar.style.width = this.bonheur + '%';

      // Adjust the color based on the bonheur level (for example, green to red)
      const color = this.getColorForBonheur(this.bonheur);
      this.bonheurBar.style.backgroundColor = color;
  }

  changeBonheurBar() {
      this.updateBonheurBar();
  }
}
