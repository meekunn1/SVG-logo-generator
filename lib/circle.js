const Design = require('./design.js');
class Circle extends Design{
    constructor(SVGtext, SVGtextColor, SVGshapeColor) {
        super(SVGtext, SVGtextColor, SVGshapeColor);
    }
    render() {
        return `  <circle cx="150" cy="100" r="80" fill="${this.SVGshapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.SVGtextColor}">${this.SVGtext}</text>`;
    }
}

module.exports = Circle;