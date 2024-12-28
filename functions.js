var numerals = [['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['M', 'MM', 'MMM']];
var digits = function (input) {
    return input.toString().length;
};
var howManyDigits = digits(300);
var convertToNumerals = function (input, howManyDigits) {
    var inputAsArray = input.toString().split('');
    var count = howManyDigits;
    var whichDigit = 0;
    var output = [];
    while (count > 0) {
        output.push(numerals[count - 1][parseInt(inputAsArray[whichDigit]) - 1]);
        whichDigit++;
        count--;
    }
    return output.join('');
};
console.log(convertToNumerals(2341, 4));
module.exports = {
    digits: digits,
    convertToNumerals: convertToNumerals
};
