'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const obj1 = { name: 'Name' };
  let obj2 = { name: 'Name' };

  obj1.name = 'New name';
  obj2.name = 'New name';

  obj2 = { name: 'Name2' };
  // obj1 = { name: 'Name2' }; помилка, оскільки obj1 - константа
};

module.exports = { fn };
