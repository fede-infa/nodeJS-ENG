// More real way of testing
const isVowel = (vowel) => {
    if(!vowel){
        return false
    }
    return 'aeiou'.includes(vowel.toString().toLowerCase())};

module.exports = isVowel;
