const Triangle = require('../lib/triangle.js');

describe('Triangle', () => {
    describe('render', () => {
        it('should take in color and produce shape portion for svg file', () => {
            const color = "pink";
            const triangle = new Triangle(color).render();
            expect(triangle).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="pink" />`);
        })
    })
})