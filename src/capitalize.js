function capitalize(string) {
  if (string.length === 0 || typeof string !== 'string' || string.indexOf(' ') === 0) {
    return null;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = capitalize;