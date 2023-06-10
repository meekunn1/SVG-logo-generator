const Design = require('./design.js');
class Triangle extends Design{
    constructor(SVGtext, SVGtextColor, SVGshapeColor) {
        super(SVGtext, SVGtextColor, SVGshapeColor);
    }
    render() {
        return `  <polygon points="150, 18 244, 182 56, 182" fill="${this.SVGshapeColor}" />`;
    }
}

module.exports = Triangle;