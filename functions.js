var numerals = [['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['M', 'MM', 'MMM']];
var digits = function (input) {
    return input.toString().length;
};
var howManyDigits = digits(300);
var convertToNumerals = function (input) {
    return numerals[0][input - 1];
};
console.log(convertToNumerals(3));
module.exports = digits;
