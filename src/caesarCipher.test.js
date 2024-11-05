import caesarCipher from './caesarCipher';

test('returns a string only if given a string', () => {
  const arr = [];
  expect(caesarCipher(arr, 1)).toBe(null);
  expect(caesarCipher('string', 0)).toMatch('string');
  expect(caesarCipher(' ', 1)).toBe(null);
})

test('returns a correct string given all undercase no spaces', () => {
  expect(caesarCipher('hello', 3)).toMatch('khoor');
})

test('returns a correct string given all uppercase no spaces', () => {
  expect(caesarCipher('HELLO', 3)).toMatch('KHOOR');
})

test('returns a correct string given mix uppercase and lowercase no spaces', () => {
  expect(caesarCipher('heLLo', 3)).toMatch('khOOr');
})

test('non alphabetical test case', () => {
  expect(caesarCipher('he11o', 3)).toMatch('kh11r');
})

test('punctuation and spacing is kept', () => {
  expect(caesarCipher('Hello, World!', 3)).toMatch('Khoor, Zruog!')
})
