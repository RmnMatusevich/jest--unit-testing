
const cloneArray = require('./cloneArray');

test('properly clones array', () => {
    const arr = [1,2,3];
    expect(cloneArray(arr)).toEqual(arr); // not toBe() because not the same memory adress
    expect(cloneArray(arr)).not.toBe(arr);
});