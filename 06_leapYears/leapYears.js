const leapYears = function(ano) {
 if ((ano % 100 === 0) && (ano % 400 !=  0)){
    return false;
}
else if (ano % 4 === 0) {
    return true;
}
else {
    return false;
}
};

// Do not edit below this line
module.exports = leapYears;
