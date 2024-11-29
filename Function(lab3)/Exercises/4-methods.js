'use strict';

const methods = iface => {
  const result = [];
  const keys = Object.keys(iface);
  for (const key of keys) {
    const fn = iface[key];
    result.push([key, fn.length]);
  }
  return result;
};

module.exports = { methods };
