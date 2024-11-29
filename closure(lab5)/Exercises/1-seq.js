'use strict';

const seq = (f) => (y) => {
    if(typeof y === 'number') return f(y);
    return seq((x) => f(y(x)));
}
module.exports = { seq };
