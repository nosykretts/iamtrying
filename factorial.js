var BigNumber = require('bignumber.js')

function processData(input) {
  console.log(
    fact(input)
      .toFormat()
      .replace(/\,/g, '')
  )
}
function fact(input) {
  if (typeof input != 'object') {
    input = new BigNumber(input)
  }
  if (input.eq(1) || input.eq(0)) {
    return input
  }
  return input.times(fact(input.minus(1)))
}

processData(25)
