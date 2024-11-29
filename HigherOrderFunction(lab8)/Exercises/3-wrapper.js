'use strict';

const contract = (fn, ...types) => (...args) => {
    const formatedTypes = types.map(type => type.name.toLowerCase());
    for (let i = 0; i < args.length-1; i++) {
        if (typeof args[i] !== formatedTypes[i]) {
            throw new TypeError(`Argument type mismatch`);
        }
    }
    const res = fn(...args);
    if(typeof res !== formatedTypes[formatedTypes.length-1]){
        throw new TypeError(`Result type mismatch`);
    }
    return res;
};

module.exports = { contract };
