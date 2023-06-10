const Design = require('./design.js');
class Circle extends Design{
    constructor(SVGtext, SVGtextColor, SVGshapeColor) {
        super(SVGtext, SVGtextColor, SVGshapeColor);
    }
    render() {
        return `  <circle cx="150" cy="100" r="80" fill="${this.SVGshapeColor}" />`;
    }
}

module.exports = Circle;