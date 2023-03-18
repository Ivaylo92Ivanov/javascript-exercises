const palindromes = function (word) {
    
    let wordReversed = "";
    let wordReversedAsArray = (word.split('').reverse());
    wordReversedAsArray.forEach(letter => letter.toLowerCase() !== letter.toUpperCase() ? wordReversed += letter : 0)

    let wordTruncated = ""
    let wordTruncatedAsArray = word.split("")
    wordTruncatedAsArray.forEach(letter => letter.toLowerCase() !== letter.toUpperCase() ? wordTruncated += letter : 0)

    return wordReversed.toLowerCase() === wordTruncated.toLowerCase()
};

// Do not edit below this line
module.exports = palindromes;
