const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrDigit = String(n).split('');
  let max = Number( [...arrDigit].slice(1).join('') );
  arrDigit.forEach((elem, i) => {
    const copyArr = [...arrDigit];
    copyArr.splice(i, 1);
    const num = Number( copyArr.join('') );
    if (num > max) max = num;
  });
  return max;
}

module.exports = {
  deleteDigit
};
