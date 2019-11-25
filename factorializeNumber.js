// factorialize a given integer.
// only numbers 0 or greater will be passed.

function factorialize(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
    