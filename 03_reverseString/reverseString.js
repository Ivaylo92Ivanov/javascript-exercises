const reverseString = function(text) {
    let textAsArray = text.split("");
    let textReversed = textAsArray.reverse().join("");    
    return textReversed
};

// Do not edit below this line
module.exports = reverseString;
