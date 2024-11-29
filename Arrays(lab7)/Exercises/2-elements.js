'use strict';

const removeElements = (array, ...items) => {
  items.forEach((item) => {
    const indexOfE = array.indexOf(item);
    if (indexOfE !== -1){
      array.splice(indexOfE, 1);
    }
  });
};

module.exports = { removeElements };
