const reverseString = function(inputString) {
    if (inputString === '') {
        return '';
    }
    const N = inputString.length;
    let result = "";
    for (let i = N-1; i >= 0; i--) {
        result += inputString[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
