// Truncate a string (1st arg) if it is longer than than
// the maximum stirng length (2nd arg)
// return the truncated string with a ...

function truncateString(str, num) {
    if (str.length > num) {
        str = str.slice(0, num);
        str += "...";
    }
    return str;
    }