'use strict';

const pipe = (...fns) => {
    for (const f of fns) {
        if (typeof f !== 'function') {
            throw new Error('argument should be a function');
        }
    }
    return (x) => fns.reduce((v, f) => f(v), x);
};

module.exports = { pipe };
