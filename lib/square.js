class Square {
    constructor(SVGshapeColor) {
        this.SVGshapeColor = SVGshapeColor;
    }
    render() {
        return `  <rect x="65" y="15" width="170" height="170" stroke="black" fill="${this.SVGshapeColor}" stroke-width="0"/>`;
    }
}

module.exports = Square;