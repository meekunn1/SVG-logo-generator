const inquirer = require('inquirer');

class CLI {
    constructor() {
        this.SVGtitle = '';
        this.SVGtext = '';
    }
run() {
    console.log('welcome to SVG-logo-generator!');
    console.log('Please answer the following prompt to create your logo.');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Pleae enter a title for this logo.'
        },
    ])
    .then(({ name }) => {
        this.SVGtitle = name;
        return this.addText();
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
        if (text.trim().length > 3) {
            console.log('Text input was too long.');
            return this.addText();
        }
        else if (text === '' || null || 0) {
            console.log('Text input was left empty.');
            return this.addText();
        }
        else {
            this.SVGtext = text.trim();
            return this.addTextColor();
        }
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
        const styleList = new Option().style;
        if (styleList.color == textColor) {
            return this.addShape();
        }
        else {
            console.log('Input was not an available color.');
            return this.addTextColor();
        }
      
    })
}
}