var boneurBar = /** @class */ (function () {
    function boneurBar(scenario, bonheurBar) {
        this.bonheur = scenario.bonheur;
        this.bonheurBar = bonheurBar;
    }
    boneurBar.prototype.checkEnd = function () {
        if (this.bonheur === 0) {
            alert("Vous avez perdu");
            changePage('index.html');
        }
    };
    // Function to get color based on bonheur level
    boneurBar.prototype.getColorForBonheur = function (bonheur) {
        // Example: interpolate between green (100%) and red (0%)
        var green = 255;
        var red = 255 - Math.round((bonheur / 100) * 255);
        return "rgb(".concat(red, ", ").concat(green, ", 0)");
    };
    // Function to update the bonheur bar based on the bonheur value
    boneurBar.prototype.updateBonheurBar = function () {
        // Ensure bonheur is within the valid range (0 to 100)
        this.bonheur = Math.max(0, Math.min(this.bonheur, 100));
        // Update the width of the bonheur fill element
        this.bonheurBar.style.width = this.bonheur + '%';
        // Adjust the color based on the bonheur level (for example, green to red)
        var color = this.getColorForBonheur(this.bonheur);
        this.bonheurBar.style.backgroundColor = color;
    };
    boneurBar.prototype.changeBonheurBar = function () {
        this.updateBonheurBar();
    };
    return boneurBar;
}());
export { boneurBar };
