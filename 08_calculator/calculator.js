const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(a) {
	let result = 0;
  a.forEach(num => result += num)
  return result
};

const multiply = function(a) {
  let result = 1;
  a.forEach(num => result *= num)
  return result
};

const power = function(a, b) {
  return a**b
	
};

const factorial = function(a) {
  result = 1
	if (a ===0) return result
  for (a; a > 0; a--) {
    result *= a
  }
  return result
};

const factorials = function (n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    console.log(i)
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
