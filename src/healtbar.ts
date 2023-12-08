import { Scenario } from "./scenario";

export class healBar {
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
    const red = 255 - Math.round((health / 100) * 255);
    return `rgb(${red}, ${green}, 0)`;
}
  // Function to update the health bar based on the health value
  updateHealthBar() {
      // Ensure health is within the valid range (0 to 100)
      this.health = Math.max(0, Math.min(this.health, 100));

      // Update the width of the health fill element
      this.healthBar.style.width = this.health + '%';

      // Adjust the color based on the health level (for example, green to red)
      const color = this.getColorForHealth(this.health);
      this.healthBar.style.backgroundColor = color;
  }

  changeHealthBar() {
      this.updateHealthBar();
  }
}
