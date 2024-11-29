'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
    let difference = [];
    for(const e of array1){
        if(!array2.includes(e)){
            difference.push(e);
        }
    }
    return difference;
};

module.exports = { difference };
