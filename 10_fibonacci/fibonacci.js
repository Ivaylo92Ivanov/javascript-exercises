const fibonacci = function(num) {
    num = parseInt(num);
    if (num <0) return "OOPS"
    let firstNum = 1;
    let nextNum = 1;
    let resultNum = 0;
    for (let i = 0; i <num; i++) {
        resultNum = firstNum + nextNum;
        firstNum = nextNum;
        nextNum = resultNum;
    };
    return resultNum-firstNum
    };

// Do not edit below this line
module.exports = fibonacci;
