const convertToCelsius = function(fahrenheitValue) {

    return Math.round((fahrenheitValue - 32.0) * 5.0/9.0 * 10) / 10.0;
};

const convertToFahrenheit = function(celsiusValue) {
  return Math.round((celsiusValue * 9.0 / 5.0 + 32.0) * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
