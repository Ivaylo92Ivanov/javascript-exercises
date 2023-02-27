const sumAll = function(num1, num2) {
    let resultSum = 0;
    if ((num1 <0 || num2 <0)) return "ERROR";
    if (typeof(num1) !== "number" || typeof(num2) !== "number") return "ERROR";
    if (num1 > num2) {
        [num1, num2] = [num2, num1]
    };
    for (num1; num1 <= num2; num1++) {
        resultSum += num1;
    };
    return resultSum;
};

// Do not edit below this line
module.exports = sumAll;
