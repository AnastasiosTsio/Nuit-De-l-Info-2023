import { Scenario } from "./scenario";

export class healBar {
  checkEnd() {
    if (this.health === 0) {
      alert("Vous avez perdu");
      changePage('index.html');
    }
  }
    health: number;
    healthBar: any;
    scenario: Scenario;

    constructor(scenario: any, healthBar: any) {
        this.health = scenario.environnement;
        this.healthBar = healthBar;
    }

  // Function to get color based on health level
  getColorForHealth(health: number) {
    // Example: interpolate between green (100%) and red (0%)
    const green = 255;
    const red = 255 - Math.round((health / 4) * 255);
    return `rgb(${red}, ${green}, 0)`;
}
  // Function to update the health bar based on the health value
  updateHealthBar(newHealth: number) {
      // Ensure health is within the valid range (0 to 100)
      this.health = Math.max(0, Math.min(newHealth, 4));
      console.log(this.health);
      // Update the width of the health fill element
      this.healthBar.style.width = (this.health*100)/4 + '%';

      // Adjust the color based on the health level (for example, green to red)
      const color = this.getColorForHealth(this.health);
      this.healthBar.style.backgroundColor = color;
  }

  changeHealthBar(newHealth: number) {
      this.updateHealthBar(newHealth);
  }
}
