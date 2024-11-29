'use strict';

const removeElement = (array, item) => {
  const indexOfE = array.indexOf(item);
  if (indexOfE !== -1) {
    array.splice(indexOfE, 1);
  }
};

module.exports = { removeElement };
