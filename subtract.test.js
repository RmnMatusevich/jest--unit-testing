const subtract = require('./subtract');

test('properly subtracting two numbers', () => {
   expect(subtract(1,3)).toBe(-2);
});