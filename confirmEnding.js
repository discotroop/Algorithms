// check if a string, first arg, ends with the given target, second arg.
// do not use .endWith() from es2015

function confirmEnding(str, target) {
    str = str.split(" ").pop();
    let slicepoint = str.length - target.length;
    str = str.slice(slicepoint);
    if (str === target) {
      return true;
    } else {
      return false;
    }
   }
   
   confirmEnding("Open sesame", "same");
   