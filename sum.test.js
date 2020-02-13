const sum = require('./sum');

test('properly adds two numbers', () => {
   // if (sum(1,2) ===3) {
   //     console.log('True!')
   // }else {
   //     throw Error;
   // }

    expect(sum(1,2)).toBe(3);
});