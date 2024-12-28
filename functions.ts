const input = document.querySelector('input');
const button = document.querySelector('button');
let userInput: number;
button.addEventListener('click', function(e){e.preventDefault();
     userInput = parseInt(input.value);
});

console.log(userInput);

const numerals: string[][] = [['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
                                ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
                                ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
                                ['M', 'MM', 'MMM']];

const digits = (input: number): number => {
    return input.toString().length;
}

const howManyDigits: number = digits(300)

const convertToNumerals = (input: number, howManyDigits: number): string=> {
    const inputAsArray = input.toString().split('')
    let count: number = howManyDigits;
    let whichDigit: number = 0;
    const output:string[] = [];
    while(count>0){
        output.push(numerals[count-1][parseInt(inputAsArray[whichDigit])-1])
        whichDigit++
        count--
    }
    return output.join('')
}
console.log
console.log(convertToNumerals(2341, 4))


//commented out but uncomment for testing
// module.exports = {
//     digits,
//     convertToNumerals
// };
