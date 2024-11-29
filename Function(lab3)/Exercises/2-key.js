'use strict';

const generateKey = (length, possible) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * possible.length);
    key += possible.charAt(index);
  }
  return key;
};

module.exports = { generateKey };
