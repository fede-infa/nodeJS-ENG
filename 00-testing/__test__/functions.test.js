const isVowel = require('../functions');

describe('Testing functions', () =>{ // Describir de manera general como van a estar relacionados los testings
    it('Should return a true with a vowel param', () =>{ // Describe la prueba unitaria
        const value = isVowel('a');
        expect(value).toBe(true); // Expect returned value as true
    })

    it('Should return a false with a not vowel param', () =>{
        const value = isVowel('b');
        expect(value).toBe(false);
    })
});