export default function analyzeArray(array) {
  const sortedArrayLow = array.sort((a, b) => a - b)
  const object = {
    average: (array.reduce((acc, curr) => acc + curr, 0)) / (array.length),
    min: sortedArrayLow[0],
    max: sortedArrayLow[array.length - 1],
    length: array.length
  }
  return object
}