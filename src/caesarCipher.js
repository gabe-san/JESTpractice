export default function caesarCipher(string, shiftfactor) {
  if (typeof string !== 'string' || string.length === 0 || string.indexOf(' ') === 0) {
    return null;
  }
  if (shiftfactor === 0) {
    return string
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    // check if current char is letter
    if (char.match(/[a-z]/i)) {
      const charCode = string.charCodeAt(i);
      // Uppercase
      if (charCode >= 65 && charCode <= 90) {
        char = String.fromCharCode(((charCode - 65 + shiftfactor) % 26) + 65);
      }
      // Lowercase
      if (charCode >= 97 && charCode <= 122) {
        char = String.fromCharCode(((charCode - 97 + shiftfactor) % 26) + 97);
      }
    }
    // Append
    result += char
  }
  return result;
}