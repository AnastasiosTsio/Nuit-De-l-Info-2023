var resourcesBar = /** @class */ (function () {
    function resourcesBar(scenario, ressourcesBar) {
        this.ressources = scenario.ressources;
        this.ressourcesBar = ressourcesBar;
    }
    resourcesBar.prototype.checkEnd = function () {
        if (this.ressources === 0) {
            alert("Vous avez perdu");
            changePage('index.html');
        }
    };
    // Function to get color based on ressources level
    resourcesBar.prototype.getColorForRessources = function (ressources) {
        // Example: interpolate between green (100%) and red (0%)
        var green = 255;
        var red = 255 - Math.round((ressources / 100) * 255);
        return "rgb(".concat(red, ", ").concat(green, ", 0)");
    };
    // Function to update the ressources bar based on the ressources value
    resourcesBar.prototype.updateRessourcesBar = function () {
        // Ensure ressources is within the valid range (0 to 100)
        this.ressources = Math.max(0, Math.min(this.ressources, 100));
        // Update the width of the ressources fill element
        this.ressourcesBar.style.width = this.ressources + '%';
        // Adjust the color based on the ressources level (for example, green to red)
        var color = this.getColorForRessources(this.ressources);
        this.ressourcesBar.style.backgroundColor = color;
    };
    resourcesBar.prototype.changeRessourcesBar = function () {
        this.updateRessourcesBar();
    };
    return resourcesBar;
}());
export { resourcesBar };
