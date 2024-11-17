const sumAll = function(value1, value2) {
    if (!Number.isInteger(value1) || !Number.isInteger(value2)) {
        return 'ERROR';
    }
    if (value1 < 0 || value2 < 0) {
        return 'ERROR';
    }
    let result = 0;
    let startInt = Math.min(value1, value2);
    let endInt = Math.max(value1, value2);
    for (let x = startInt; x <= endInt; x++) {
        result += x;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
