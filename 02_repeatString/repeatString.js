const repeatString = function(inputString, count) {
    if (inputString === '') {
        return '';
    }
    if (count < 0) {
        return 'ERROR'
    }
    result = '';
    for (let i = 0; i < count; i++) {
        result += inputString;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
