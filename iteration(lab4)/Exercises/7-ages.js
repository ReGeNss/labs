'use strict';

const ages = (persons) => {
  let ages = {};
  for (const personKey in persons) {
    let person = persons[personKey];
    ages[personKey]=person.died-person.born;
  }
  return ages;
};

module.exports = { ages };
