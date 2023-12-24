const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw Error("\'arr\' parameter must be an instance of the Array!");
  let transArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '--double-next' && arr[i + 1] !== undefined) {
      transArray.push(arr[i + 1]);

    } else if (arr[i] === '--double-prev' && arr[i - 1] !== undefined && arr[i - 2] !== "--discard-next") {
      transArray.push(arr[i - 1]);

    } else if (arr[i] === '--discard-next' && arr[i + 1] !== undefined) {
      i += 1;

    } else if (arr[i] === '--discard-prev' && arr[i - 1] !== undefined && arr[i - 2] !== "--discard-next") {
      transArray.pop();

    } else if (arr[i] !== '--double-next' && arr[i] !== '--double-prev' && arr[i] !== '--discard-next' && arr[i] !== '--discard-prev') {
      transArray.push(arr[i]);
    }
  }
  return transArray;
}

module.exports = {
  transform
};
