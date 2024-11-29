'use strict';

const array = () => {
    const arr = [];
    const fnc = (x) => arr[x];
    fnc.pop = () => arr.pop();
    fnc.push = (e) => {
      arr.push(e)
    };
    return fnc;
}

module.exports = { array };
