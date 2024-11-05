import analyzeArray from './analyzeArray';

test('returns an object with required properties', () => {
  const array = [1, 2, 3, 4, 5];
  const result = analyzeArray(array)
  expect(typeof result).toBe('object')
  expect(result).toEqual({ average: 3, min: 1, max: 5, length: 5 })
})