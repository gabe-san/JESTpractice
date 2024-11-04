const capitalize = require('./capitalize');

test('takes a string and returns with first character capitalized', () => {
  const arr = [];
  expect(capitalize('string')).toMatch('String');
  expect(capitalize('s')).toMatch('S');
  expect(capitalize('')).toBe(null);
  expect(capitalize(arr)).toBe(null);
  expect(capitalize('space test')).toMatch('Space test');
  expect(capitalize(' ')).toBe(null);
})