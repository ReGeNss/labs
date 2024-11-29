'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
    const uniqueArray = [];
    for (const e of array) {
        if (!uniqueArray.includes(e)) {
            uniqueArray.push(e);
        }
    }
    return uniqueArray;
};

module.exports = { unique };
