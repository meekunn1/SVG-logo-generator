const inquirer = require('inquirer');

class CLI {
    constructor() {
        this.title = "";
        this.config = [];
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
        this.title = name;
        return this.addText();
    })
    }

addText() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please choose a text for the logo.(no more than 3 letters)'
        }
    ])
    .then(({ text }) => {
        if (text.trim().length > 3) {
            console.log('Text input was too long.');
            return addText();
        }
    })
    }
}