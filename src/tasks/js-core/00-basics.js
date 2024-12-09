// return sum of given numbers
function sum(a, b, c) {
  let sum = 0;
  sum = a + b + c;
  return sum;
}

// return sum of given arguments,
// if argument is not a number try to make a number and add to the sum
function safeSum(a, b, c) {
  let sum = 0;
  //your code should be here
  let aNum = Number(a);
  let bNum = Number(b);
  let cNum = Number(c);

  if (!isNaN(aNum)) sum += aNum;
  if (!isNaN(bNum)) sum += bNum;
  if (!isNaN(cNum)) sum += cNum;

  return sum;
}

// return maximum of given arguments
// do not use Math.max
function max(a, b, c) {
  let m = a;
  if (b > m) m = b;
  if (c > m) m = c;
  return m;
}

//return minimum of given arguments
// do not use Math.min
function min(a, b, c) {
  let m = a;
  if (b < m) m = b;
  if (c < m) m = c;
  return m;
}

// return true if given number is integer
// return false otherwise
// do not use Number.isInteger
function isInteger(n) {
  //your code is here
  if (n % 1 === 0) {
    return true;
  } else return false;
}

// write logic for rounding given number n with given precision k
// example roundNumber(0.77777, 2) == 0.78
// roundNumber(0.77777, 3) == 0.778
// do not use Number.toFixed
function roundNumber(n, k) {
  //your code is here
  const numParts = n.toString().split("."); //["0", "77777"]

  if (numParts.length < 2 || numParts[1].length < k) {
    return n;
  }

  let arr = numParts[1].split("");

  const checkNum = parseInt(arr[k]);
  let roundNum = parseInt(arr[k - 1]);

  if (checkNum >= 5) {
    roundNum += 1;
  }

  arr[k - 1] = roundNum.toString();
  let updatedPart = arr.slice(0, k).join("");

  return parseFloat(`${numParts[0]}.${updatedPart}`);
}

// given array of numbers
// return percentages of each number in array
// it mean how many percents each number take from total sum
function percentage(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
    (number / sum) * 100;
  });
  return numbers.map((number) => (number / sum) * 100);
}

module.exports = {
  sum,
  safeSum,
  max,
  min,
  isInteger,
  roundNumber,
  percentage,
};
