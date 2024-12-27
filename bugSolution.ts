function isNumberArray(arr: any[]): arr is number[] {
  return arr.every(item => typeof item === 'number');
}

function combine(arr1: number[], arr2: any[]): number[] {
  if (!isNumberArray(arr2)) {
    throw new Error('arr2 must be a number array');
  }
  return [...arr1, ...arr2];
}

const result = combine([1, 2, 3], [4, 5, 6]);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]

// const result2 = combine([1, 2, 3], ["a", "b", "c"]); // Throws an error