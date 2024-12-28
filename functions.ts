const numerals: string[][] = [['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
                                ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
                                ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
                                ['M', 'MM', 'MMM']];

const digits = (input: number): number => {
    return input.toString().length;
}

const howManyDigits: number = digits(300)

const convertToNumerals = (input: number){
    return numerals[0][input-1]
}

console.log(convertToNumerals(3))


module.exports = digits;