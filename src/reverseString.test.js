
const reverseString = require('./reverseString')

test('takes a string and returns reversed string', () => {
  const arr = [];
  expect(reverseString('test')).toMatch('tset');
  expect(reverseString('s')).toMatch('s');
  expect(reverseString('')).toBe(null);
  expect(reverseString(arr)).toBe(null);
  expect(reverseString('space test')).toMatch('tset ecaps');
  expect(reverseString(' ')).toBe(null);
})