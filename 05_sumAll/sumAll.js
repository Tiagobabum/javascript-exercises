const sumAll = function(numberOne, numberTwo) {
let minimo = Math.min(numberOne, numberTwo)
let maximo = Math.max(numberOne, numberTwo)
let valor = 0
if ((minimo < 0  )||typeof numberOne !== 'number'||typeof numberTwo !== 'number'){
    return "ERROR"
}

for (let i = minimo; i <= maximo; i++) {
      valor = valor + i
}
return valor 
};

// Do not edit below this line
module.exports = sumAll;
