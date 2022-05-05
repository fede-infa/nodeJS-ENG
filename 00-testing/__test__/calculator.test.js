const calculator = require('../calculator');

describe('Testing of calculator function', () =>{
    it('Should return false with a letter as operator', () =>{
        expect(calculator('b',1,3,4)).toBe(false);
    })
    it('Should return false with operator length greater than 1', () =>{
        expect(calculator('+-',1,3,4)).toBe(false);
    })
    it('Should return a 6 with the sum of 1 + 2 + 3', () =>{
        expect(calculator('+',1,2,3)).toBe(6);
    })
    it('Should return a -4 with the rest of 1 + 2 + 3', () =>{
        expect(calculator('-',1,2,3)).toBe(-4);
    })
    it('Should return a 0.4 with the divition of 4 / 2 / 5', () =>{
        expect(calculator('/',4,2,5)).toBe(0.4);
    })
    it('Should return a 40 with the rest of 4 * 2 * 5', () =>{
        expect(calculator('*',4,2,5)).toBe(40);
    })
    it('Should return false with % as operator', () =>{
        expect(calculator('%',2,5)).toBe(false);
    })
})