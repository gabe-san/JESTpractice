import calculator from './calculator';

// note: check additional rounding in each test case if you know the use case requires such precision eg: currency, financial, etc.
test('addition of two numbers returns correctly added integer', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add('1', 2)).toBe(null);
  expect(calculator.add(1, '2')).toBe(null);
  expect(calculator.add('1', '2')).toBe(null);
  expect(calculator.add(1.2, 2.2)).toBe(3.40);
  expect(calculator.add('1.2', 2.2)).toBe(null);
})

test('subtraction of two numbers returns correctly subtracted integer', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.subtract('1', 2)).toBe(null);
  expect(calculator.subtract(1, '2')).toBe(null);
  expect(calculator.subtract('1', '2')).toBe(null);
  expect(calculator.subtract(1.2, 2.2)).toBe(-1.00);
  expect(calculator.subtract('1.2', 2.2)).toBe(null);
})

test('division of two numbers returns correctly divided integer', () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
  expect(calculator.divide('1', 2)).toBe(null);
  expect(calculator.divide(1, '2')).toBe(null);
  expect(calculator.divide('1', '2')).toBe(null);
  expect(calculator.divide(1.2, 2.2)).toBe(0.55);
  expect(calculator.divide('1.2', 2.2)).toBe(null);
})

test('multiplication of two numbers returns correctly multiplied integer', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
  expect(calculator.multiply('1', 2)).toBe(null);
  expect(calculator.multiply(1, '2')).toBe(null);
  expect(calculator.multiply('1', '2')).toBe(null);
  expect(calculator.multiply(1.2, 2.2)).toBe(2.64);
  expect(calculator.multiply('1.2', 2.2)).toBe(null);
})
