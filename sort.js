function isSorted(arr) {
  return arr.every((val, i, arr) => !i || val >= arr[i - 1])
}

function parseInput(input) {
  const x = input.split('\n')
  return {
    len: x.length > 1 ? Number(x[0]) : null,
    members: x[x.length > 1 ? 1 : 0].split(' ').map(Number)
  }
}

function almostSorted(A) {
  for (var i = 1; i < A.length; ++i) {
    // Look for an inverted adjacent pair.
    if (A[i - 1] <= A[i]) {
      continue
    }
    var x = A[i - 1],
      left = i - 1
    // If x is one of a sequence of identical elements, take the leftmost.
    while (left - 1 >= 0 && A[left - 1] == x) {
      --left
    }
    // Scan past the inverted pair for the earliest element no smaller than x.
    for (++i; i < A.length; ++i) {
      if (A[i] >= x) {
        break // If we never break here, i will be equal to A.length.
      }
    }
    // Let y be the element before the earliest element no smaller than x.
    var right = i - 1,
      y = A[right]
    // Swap x and y.
    A[left] = y
    A[right] = x
    // Is the array sorted now?
    for (i = left == 0 ? 1 : left; i < A.length; ++i) {
      if (A[i - 1] > A[i]) {
        return false
      }
    }
    return A // One swap was enough to sort the array.
  }
  return A // The array is already sorted.
}

function startSort(rawInput) {
  console.log('-----------')
  const input = parseInput(rawInput)
  if (isSorted(input.members)) {
    return 'yes'
  } else {
    // console.log('lanjut')
    return almostSorted(input.members)
  }
}

console.log(parseInput('2\n4 2'))
console.log(parseInput('3 3 1 2'))

console.log(startSort('3\n2 3 4'))

console.log(startSort('2\n4 2'))
console.log(startSort('3 3 1 2'))
