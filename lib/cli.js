const inquirer = require('inquirer');
const { createSVG } = require('./SVG.js');
const fs = require('fs');

class CLI {
    constructor() {
        this.SVGtitle = '';
        this.SVGtext = '';
        this.SVGtextColor = '';
        this.SVGshape = '';
        this.SVGshapeColor = '';
    }
run() {
    console.log('Welcome to SVG-logo-generator!');
    console.log('Please answer the following prompt to create your SVG logo.');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter a title for this logo.'
        },
    ])
    .then(({ name }) => {
        this.SVGtitle = name.trim().replace(" ","-");
        return this.addText();
    })
    .then(() => {
        const SVG = createSVG(this.SVGtext, this.SVGtextColor, this.SVGshape, this.SVGshapeColor)
        return fs.writeFile(`${this.SVGtitle}.svg`, SVG);
    })
    .then(() => console.log(`${this.SVGtitle}.svg have been successfuly created`))
    .catch((err) => {
        console.log(err);
        console.log("something went wrong");
    })
    }

addText() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please input the desired text for the logo.(no more than 3 letters)'
        }
    ])
    .then(({ text }) => {
        this.SVGtext = text.trim().slice(0,3)
        return this.addTextColor();
        // if (text.trim().length > 3) {
        //     console.log('Text input was too long.');
        //     return this.addText();
        // }
        // else if (text === '' || null || 0) {
        //     console.log('Text input was left empty.');
        //     return this.addText();
        // }
        // else {
        //     this.SVGtext = text.trim();
        //     return this.addTextColor();
        // }
    })
    }

addTextColor() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'textColor',
            message: 'What color should the text be?(color keyword or hexadecimal number)'
        }
    ])
    .then(({ textColor }) => {
        this.SVGtextColor = textColor.trim();
        return this.addShape();
        // const styleList = new Option().style;
        // if (styleList.color == textColor.trim()) {
        //     this.SVGtextColor = textColor.trim();
        //     return this.addShape();
        // }
        // else {
        //     console.log('Input was not an available color.');
        //     return this.addTextColor();
        // }
    })
}

addShape() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Please choose the shape of your logo.'
        }
    ])
    .then(({ shape }) => {
        this.SVGshape = shape;
        return this.addShapeColor();
    })
}

addShapeColor() {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'shapeColor',
            message: 'What color should the logo shape be?(color keyword or hexadecimal number)'
        }
    ])
    .then(({ shapeColor }) => {
        this.SVGshapeColor = shapeColor;
        return this.addShapeColor();
    })
}
}
module.exports = CLI;