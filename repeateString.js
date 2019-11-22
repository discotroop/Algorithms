// repeat a given string (str), a given number (num) of times
// return an empty string if num is negative.

function repeatStringNumTimes(str, num) {
    let result = ""
    if (num > 0) {
    for (let i = 0; i < num; i++) {
        result += str;
        }
    }
    return result
    }