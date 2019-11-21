// return an array of the largest number from each provided sub-array
// for simplicity use only four sub arrays.

function largestOfFour(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Math.max(...arr[i]);
    }
    return arr;
  }