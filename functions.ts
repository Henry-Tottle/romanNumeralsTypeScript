const input: HTMLInputElement = document.querySelector('input');
const button: HTMLButtonElement = document.querySelector('button');
const outputDiv: HTMLElement = document.getElementById('output')
let userInput: number;
button.addEventListener('click', function (e) {
    userInput = parseInt(input.value);
    outputDiv.textContent = 'Your number converted to Roman Numerals is: ' + convertToNumerals(userInput, digits(userInput));
    e.preventDefault();
});

const numerals: string[][] = [['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['M', 'MM', 'MMM']];

const digits = (input: number): number => {
    return input.toString().length;
}

const convertToNumerals = (input: number, howManyDigits: number): string => {
    const inputAsArray = input.toString().split('')
    let count: number = howManyDigits;
    let whichDigit: number = 0;
    const output: string[] = [];
    while (count > 0) {
        output.push(numerals[count - 1][parseInt(inputAsArray[whichDigit]) - 1])
        whichDigit++
        count--
    }

    return output.join('')
}

