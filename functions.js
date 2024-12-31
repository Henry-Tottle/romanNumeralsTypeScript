var input = document.querySelector('input');
var button = document.querySelector('button');
var outputDiv = document.getElementById('output');
var userInput;
button.addEventListener('click', function (e) {
    userInput = parseInt(input.value);
    outputDiv.textContent = 'Your number converted to Roman Numerals is: ' + convertToNumerals(userInput, digits(userInput));
    e.preventDefault();
});
var numerals = [['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['M', 'MM', 'MMM']];
var digits = function (input) {
    return input.toString().length;
};
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
