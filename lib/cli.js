const inquirer = require('inquirer');
const { join } = require('path');
const { createSVG } = require('./SVG.js');
const { writeFile } = require('fs/promises');

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
        this.SVGtitle = name.trim().replaceAll(" ","-");
        return this.addText();
    })
    .then(() => {
        const SVG = createSVG(this.SVGtext, this.SVGtextColor, this.SVGshape, this.SVGshapeColor)
        // return writeFile(`${this.SVGtitle}.svg`, SVG);
        return writeFile(join(__dirname, `..`, `output`,`${this.SVGtitle}.svg`), SVG);
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
        this.SVGtext = text.trim().replaceAll(" ","").slice(0,3)
        return this.addTextColor();
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
        this.SVGtextColor = textColor.trim().toLowerCase();
        return this.addShape();
    })
}

addShape() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Please choose the shape of your logo.',
            choices: ['circle', 'square', 'triangle'],
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
        this.SVGshapeColor = shapeColor.trim().toLowerCase();
    })
}
}
module.exports = CLI;