const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function createSVG(SVGtext, SVGtextColor, SVGshape, SVGshapeColor) {
    const shape = (SVGshape) => {
        if (SVGshape == 'circle') {
            return new Circle(SVGshapeColor).render()
        }
        if (SVGshape == 'square') {
            return new Square(SVGshapeColor).render()
        }
        if (SVGshape == 'triangle') {
            return new Triangle(SVGshapeColor).render()
        }
        else {
            console.log("error at createSVG => shape function.")
        }
    }
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${shape(SVGshape)}
      
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${SVGtextColor}">${SVGtext}</text>
      
</svg>`
}

module.exports = { createSVG };