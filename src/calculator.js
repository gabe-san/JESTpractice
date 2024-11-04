const calculator = {
  add(a, b) {
    if ((a % 1 !== 0 && typeof a !== 'string') && (b % 1 !== 0 && typeof b !== 'string')) {
      const value = parseFloat(a) + parseFloat(b)
      return Math.round((parseFloat(value.toFixed(2) * 100))) / 100;
    }
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return a + b
    }

    return null
  },
  subtract(a, b) {
    if ((a % 1 !== 0 && typeof a !== 'string') && (b % 1 !== 0 && typeof b !== 'string')) {
      const value = parseFloat(a) - parseFloat(b)
      return Math.round((parseFloat(value.toFixed(2) * 100))) / 100
    }
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return a - b
    }
    return null
  },
  divide(a, b) {
    if ((a % 1 !== 0 && typeof a !== 'string') && (b % 1 !== 0 && typeof b !== 'string')) {
      const value = parseFloat(a) / parseFloat(b)
      return Math.round((parseFloat(value.toFixed(2) * 100))) / 100
    }
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return a / b
    }
    return null
  },
  multiply(a, b) {
    if ((a % 1 !== 0 && typeof a !== 'string') && (b % 1 !== 0 && typeof b !== 'string')) {
      const value = parseFloat(a) * parseFloat(b)
      return Math.round((parseFloat(value.toFixed(2) * 100))) / 100
    }
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return a * b
    }
    return null
  }
}
export default calculator;