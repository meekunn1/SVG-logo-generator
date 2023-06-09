const Design = require('./design.js');
class Square extends Design{
    constructor(SVGtext, SVGtextColor, SVGshapeColor) {
        super(SVGtext, SVGtextColor, SVGshapeColor);
    }
    render() {
        return `  <rect x="65" y="15" width="170" height="170" stroke="black" fill="${SVGshapeColor}" stroke-width="0"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${SVGtextColor}">${SVGtext}</text>`;
    }
}

module.exports = Square;