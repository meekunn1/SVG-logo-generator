class Circle {
    constructor(SVGshapeColor = '') {
        this.SVGshapeColor = SVGshapeColor
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${SVGshapeColor}" />`;
    }
}

module.exports = Circle;