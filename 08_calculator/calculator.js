const add = function(operand1, operand2) {
	return operand1 + operand2;
};

const subtract = function(operand1, operand2) {
	return operand1 - operand2;
};

const sum = function(myArray) {
    if (myArray.length == 0) return 0;
	return myArray.reduce((accumulator,currentItem) => accumulator + currentItem);
};

const multiply = function(myArray) {
  return myArray.reduce((accumulator, currentItem) => accumulator * currentItem);
};

const power = function(operand1, operand2) {
	return Math.pow(operand1, operand2);
};

const factorial = function(operand) {
	if (operand === 0) return 1;
    if (operand === 1) return 1;
    let result = 1;
    for (let x = 1; x <= operand; x++) {
        result *= x;
    }
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
