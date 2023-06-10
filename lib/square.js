const Design = require('./design.js');
class Square extends Design{
    constructor(SVGtext, SVGtextColor, SVGshapeColor) {
        super(SVGtext, SVGtextColor, SVGshapeColor);
    }
    render() {
        return `  <rect x="65" y="15" width="170" height="170" stroke="black" fill="${this.SVGshapeColor}" stroke-width="0"/>`;
    }
}

module.exports = Square;