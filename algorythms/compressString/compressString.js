function compressString(str) {
    let newStr = str[0];
    let count = 1;
    for(let i = 1; i < str.length; i++) {
        if(newStr[newStr.length - 1] === str[i]) {
            count++;
        } else {
            newStr += count + str[i];
            count = 1;
        }

        if (str.length - 1 === i) {
            newStr += count;
        }
    }

    return newStr;
}


module.exports = compressString;