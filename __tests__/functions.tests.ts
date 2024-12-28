const {digits, convertToNumerals} = require('../functions');

test('determines that 300 has 3 digits', ()=>{
    const expected = 3;
    const result = digits(300);
    expect(result).toBe(expected);
})

test('determines that 3000 has 4 digits', () => {
    const expected = 4;
    const result = digits(3000);
    expect(result).toBe(expected);
})
test('determines that 30 has 2 digits', () => {
    const expected = 2;
    const result = digits(30);
    expect(result).toBe(expected);
})

test('determines that 3 has 1 digits', () => {
    const expected = 1;
    const result = digits(3);
    expect(result).toBe(expected);
})

test('2341 in roman numerals is MMCCCXLI', () => {
    const expected = 'MMCCCXLI';
    const result = convertToNumerals(2341,4);
    expect(result).toBe(expected);
})

test('5 in roman numerals is V', () => {
    const expected = 'V';
    const result = convertToNumerals(5,1);
    expect(result).toBe(expected);
})

test('27 in roman numerals is XXVII', () => {
    const expected = 'XXVII';
    const result = convertToNumerals(27, 2);
    expect(result).toBe(expected);
})

test('429 in roman numerals is CDXXIX', () => {
    const expected = 'CDXXIX';
    const result = convertToNumerals(429,3);
    expect(result).toBe(expected);
})