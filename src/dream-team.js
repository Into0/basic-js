const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let dreamTeam = [];
  if (Array.isArray(members)) {
    for (let i of members) { 
      if (typeof i === 'string') {
        dreamTeam.push(/[^0-9\s]/.exec(i.toUpperCase()));
      } 
    }
  }
  return dreamTeam.sort().join('');
}

module.exports = {
  createDreamTeam
};
