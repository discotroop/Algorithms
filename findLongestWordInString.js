// Return the length of the longest word in a given sentence.

function findLongestWordLength(str) {
    let strArr = str.split(" ");
    let longestWord = strArr[0];
    for (let i = 0; i < strArr.length; i++) { 
        if (strArr[i].length > longestWord.length) {
            longestWord = strArr[i];
        }
    }
    return longestWord.length;
  }
