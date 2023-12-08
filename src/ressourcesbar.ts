import { Scenario } from "./scenario";

export class resourcesBar {
  checkEnd() {
    if (this.ressources === 0) {
      alert("Vous avez perdu");
      changePage('index.html');
    }
  }
    ressources: number;
    ressourcesBar: any;
    scenario: Scenario;

    constructor(scenario: any, ressourcesBar: any) {
        this.ressources = scenario.ressources;
        this.ressourcesBar = ressourcesBar;
    }

  // Function to get color based on ressources level
  getColorForRessources(ressources: number) {
    // Example: interpolate between green (100%) and red (0%)
    const green = 255;
    const red = 255 - Math.round((ressources / 100) * 255);
    return `rgb(${red}, ${green}, 0)`;
}
  // Function to update the ressources bar based on the ressources value
  updateRessourcesBar() {
      // Ensure ressources is within the valid range (0 to 100)
      this.ressources = Math.max(0, Math.min(this.ressources, 100));

      // Update the width of the ressources fill element
      this.ressourcesBar.style.width = this.ressources + '%';

      // Adjust the color based on the ressources level (for example, green to red)
      const color = this.getColorForRessources(this.ressources);
      this.ressourcesBar.style.backgroundColor = color;
  }

  changeRessourcesBar() {
      this.updateRessourcesBar();
  }
}
