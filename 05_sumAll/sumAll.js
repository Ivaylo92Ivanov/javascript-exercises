const sumAll = function(num1, num2) {
    let resultSum = 0;
    //check if arguments are negative numbers
    if ((num1 <0 || num2 <0)) {
        return "ERROR";
    };
    //check if arguments are not numbers
    if (typeof(num1) !== "number" || typeof(num2) !== "number") {
        return "ERROR";
    };
    //if num1 is larger, switch places of num1 and num2, so for cycle works properly
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
