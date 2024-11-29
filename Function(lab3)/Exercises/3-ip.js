'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const ipParts = ip.split('.').map((e) => parseInt(e));
  return ipParts.reduce((acc, val) => (acc << 8) + val);
};

module.exports = { ipToInt };
