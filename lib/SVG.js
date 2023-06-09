const Circle = require('./circle.js');

function createSVG(SVGtext, SVGtextColor, SVGshape, SVGshapeColor) {
    if (SVGshape === 'circle') {
        const shape = new Circle(SVGshapeColor);

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${shape}
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${SVGtextColor}">${SVGtext}</text>
      
      </svg>`
    }
}

module.exports = { createSVG };