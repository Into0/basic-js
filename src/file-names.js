const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  names.forEach( (elem) => {
    const repeatsArray = names.filter((item) => item === elem);
    repeatsArray.forEach((elem, i) => {
      if (i !== 0) repeatsArray[i] += `(${i})`
    });
    let repeats = 0;
    for (let j = 0; j < names.length; j += 1) {
      if (names[j] === elem) {
        names[j] = repeatsArray[repeats];
        repeats += 1;
      }
    }
  });
  return names;
}

module.exports = {
  renameFiles
};
