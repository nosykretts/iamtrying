
function rotate({ inputArr, rotateCount, rowsCount, columnsCount }) {
  let res = []
  for (let i = 0; i < rowsCount; i++) {
    res[i] = []
    for (let j = 0; j < columnsCount; j++) {
      res[i][j] = 0
    }
  }

  for (let c = 0; c < rotateCount; c++) {
    for (let i = c; i < rowsCount - c - 1; i++) {
      res[i + 1][c] = inputArr[i][c]
    }
  }
  for (let c = 0; c < rotateCount; c++) {
    for (let i = c + 1; i < columnsCount - c; i++) {
      res[c][i - 1] = inputArr[c][i]
    }
  }
  for (let c = 0; c < rotateCount; c++) {
    for (let i = c + 1; i < rowsCount - c; i++) {
      res[i - 1][columnsCount - c - 1] = inputArr[i][columnsCount - c - 1]
    }
  }
  for (let c = 0; c < rotateCount; c++) {
    for (let i = c; i < columnsCount - c - 1; i++) {
      res[rowsCount - c - 1][i + 1] = inputArr[rowsCount - c - 1][i]
    }
  }
  return res
}

function prettyPrint(arr) {
  console.log('')
  return arr.reduce((acc, innerArr) => {
    return acc + '\n' + innerArr.join(' ')
  }, '')
}

function parseSolve(input) {
  const lines = input.split('\n\n')
  const c = lines[0].split(' ').map(Number)

  const p = {
    rowsCount: c[0],
    columnsCount: c[1],
    rotateCount: c[2],
    inputArr: []
  }

  for (let i = 1; i < lines.length; i++) {
    p.inputArr[i - 1] = lines[i].split(' ').map(Number)
  }

  for (let i = 0; i < p.rotateCount; i++) {
    p.inputArr = rotate(p)
  }

  return prettyPrint(p.inputArr)
}

const testcase0 = `4 4 1

1 2 3 4

5 6 7 8

9 10 11 12

13 14 15 16`

const testcase1 = `
4 4 2

1 2 3 4

5 6 7 8

9 10 11 12

13 14 15 16`

const testcase2 = `
5 4 7

1 2 3 4

7 8 9 10

13 14 15 16

19 20 21 22

25 26 27 28`

const testcase3 = `
2 2 3

1 1

1 1`

console.log(parseSolve(testcase0))
console.log(parseSolve(testcase1))
console.log(parseSolve(testcase2))
console.log(parseSolve(testcase3))
