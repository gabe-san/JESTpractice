function reverseString(string) {
  if (string.length === 0 || typeof string !== 'string' || string.indexOf(' ') === 0) {
    return null;
  }
  const reversedArray = Array.from(string).reverse()
  return reversedArray.join('');
}
module.exports = reverseString;