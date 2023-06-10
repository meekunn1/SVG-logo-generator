const Square = require('../lib/square.js');

describe('Square', () => {
    describe('render', () => {
        it('shoud take in color and produce shape portion for svg file' , () => {
            const color = 'green';
            const square = new Square(color).render();
            expect(square).toEqual(`<rect x="65" y="15" width="170" height="170" stroke="black" fill="green" stroke-width="0"/>`);
        })
    })
})