class Triangle {
    constructor(SVGshapeColor) {
        this.SVGshapeColor = SVGshapeColor;
    }
    render() {
        return `  <polygon points="150, 18 244, 182 56, 182" fill="${this.SVGshapeColor}" />`;
    }
}

module.exports = Triangle;