const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str != 'string') { str = String(str); }

  if (!options.separator) { options.separator = '+'; }
  if (!options.additionSeparator) { options.additionSeparator = '|'; }

  let result = [];
  let additionResult = [];

  if (options.hasOwnProperty('addition')) {
    if (typeof options.addition != 'string') {
      options.addition = String(options.addition);
    }

    for (let i = 0; i < options.additionRepeatTimes - 1; i += 1) {
      additionResult.push(options.addition);
      additionResult.push(options.additionSeparator);
    }
      additionResult.push(options.addition);
      additionResult.push(str);
      str = additionResult.reverse().join('');
  }

  for (let i  = 0; i < options.repeatTimes - 1; i += 1) {
    result.push(str);
    result.push(options.separator);
  }
  result.push(str);
  
  return result.join('');
}

module.exports = {
  repeater
};
