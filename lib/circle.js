class Circle {
    constructor(SVGshapeColor) {
        this.SVGshapeColor = SVGshapeColor;
    }
    render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.SVGshapeColor}" />`;
    }
}

module.exports = Circle;