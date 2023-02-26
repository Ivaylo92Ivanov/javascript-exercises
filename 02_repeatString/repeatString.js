const repeatString = function(text, multiplier) {
    let resultText = "";
    if (multiplier < 0) {
        return "ERROR";
    } else if (multiplier === 0) {
        return resultText;
    };
    for (let i = 0; i < multiplier; i++) {
        resultText += text;
    };
    return resultText
};

// Do not edit below this line
module.exports = repeatString;
