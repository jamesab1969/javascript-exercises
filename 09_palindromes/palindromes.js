
const alphaNumericValues = "abcdefghijklmnopqrstuvwxyz0123456789";
const palindromes = function (word) {
    let filteredWord = '';
    for (let i = 0; i < word.length; i++) {
        let ch = word.charAt(i).toLowerCase();
        if (alphaNumericValues.includes(ch)) {
            filteredWord += ch;
        }
    }
    for (let i = 0; i < filteredWord.length; i++) {
        if (filteredWord.charAt(i) !== (filteredWord.charAt(filteredWord.length - i - 1))) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
