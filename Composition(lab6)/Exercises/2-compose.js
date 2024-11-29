'use strict';

const compose = (...fns) => {
  let handlers = [];
  fns.reverse();
  const compose =(x) => {
    let res = x;
    try{
      for(const f of fns){
        res = f(res);
      }
      return res;
    } catch(error) {
      for (const handler of handlers) {
        handler(error);
      }
      return undefined;
    }
  }
  compose.on = (name, handler) => {
    if (name === 'error') {
      return handlers.push(handler);
    }
  }
  return compose;
};


module.exports = { compose };
