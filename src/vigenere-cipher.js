const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, keyword) {

    if (typeof message === 'undefined' || typeof keyword === 'undefined') {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i += 1) {
      const char = message[i].toUpperCase();

      if (alphabet.includes(char)) {
        const charIndex = alphabet.indexOf(char);
        const keyCharIndex = alphabet.indexOf(keyword[keyIndex % keyword.length].toUpperCase());
        const encryptedCharIndex = (charIndex + keyCharIndex) % alphabet.length;

        result += alphabet[encryptedCharIndex];
        keyIndex += 1;
        
      } else {
        result += char;
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(message, keyword) {

    if (typeof message === 'undefined' || typeof keyword === 'undefined') {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i += 1) {
      const char = message[i].toUpperCase();

      if (alphabet.includes(char)) {
        const charIndex = alphabet.indexOf(char);
        const keyCharIndex = alphabet.indexOf(keyword[keyIndex % keyword.length].toUpperCase());
        const decryptedCharIndex = (charIndex - keyCharIndex + alphabet.length) % alphabet.length;

        result += alphabet[decryptedCharIndex];
        keyIndex += 1;

      } else {
        result += char;
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
