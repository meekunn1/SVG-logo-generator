const Circle = require('../lib/circle.js');

describe('Circle', () => {
    describe('render', () => {
        it('should take in SVGshapeColor and produce shape portion for svg file', () => {
            const color = 'blue';
            const circle = new Circle(color).render();
            expect(circle).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
        })
    })
})