const convertToCelsius = function(fahrenheit) {
  let celsiusTemp = (fahrenheit - 32) / 1.8
  let roundedNumberC = parseFloat(celsiusTemp.toFixed(1))
  return roundedNumberC;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheitTemp = (celsius * 1.8) +32
  let roundedNumberF = parseFloat(fahrenheitTemp.toFixed(1))
  return roundedNumberF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
