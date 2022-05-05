const isVowel = require('./functions')

console.log('Should return a true with a vowel param');
if(isVowel('e')){
    console.log('Testing success');
} else{
    console.log('Testing failed');
}

console.log('Should return a false with a consonant param');
if(isVowel('b')){
    console.log('Testing success');
} else{
    console.log('Testing failed');
}

console.log('Should return a false with a number param');
if(isVowel(17)){
    console.log('Testing success');
} else{
    console.log('Testing failed');
}

console.log('Should return a true with a capital vowel param');
if(isVowel('A')){
    console.log('Testing success');
} else{
    console.log('Testing failed');
}

console.log('Should return a false with a null param');
if(isVowel(null)){
    console.log('Testing success');
} else{
    console.log('Testing failed');
}

// Node have assert as a native library

const assert = require('assert');

// .ok() always expects a true
assert.ok(isVowel('a'));
assert.ok(isVowel('b') === false);
