const digits = require('../functions')

test('determines that 300 has 3 digits', ()=>{
    const expected = 3;
    const result = digits(300);
    expect(result).toBe(expected)
})