var richessBar = /** @class */ (function () {
    function richessBar(scenario, richesseBar) {
        this.richesse = scenario.argent;
        this.richesseBar = richesseBar;
    }
    richessBar.prototype.checkEnd = function () {
        if (this.richesse === 0) {
            alert("Vous avez perdu");
            changePage('index.html');
        }
    };
    // Function to get color based on richesse level
    richessBar.prototype.getColorForRichesse = function (richesse) {
        // Example: interpolate between green (100%) and red (0%)
        var green = 255;
        var red = 255 - Math.round((richesse / 100) * 255);
        return "rgb(".concat(red, ", ").concat(green, ", 0)");
    };
    // Function to update the richesse bar based on the richesse value
    richessBar.prototype.updateRichesseBar = function () {
        // Ensure richesse is within the valid range (0 to 100)
        this.richesse = Math.max(0, Math.min(this.richesse, 100));
        // Update the width of the richesse fill element
        this.richesseBar.style.width = this.richesse + '%';
        // Adjust the color based on the richesse level (for example, green to red)
        var color = this.getColorForRichesse(this.richesse);
        this.richesseBar.style.backgroundColor = color;
    };
    richessBar.prototype.changeRichesseBar = function () {
        this.updateRichesseBar();
    };
    return richessBar;
}());
export { richessBar };
