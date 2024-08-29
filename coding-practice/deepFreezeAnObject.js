function deepFreeze(obj) {
  Object.freeze(obj);

  for (const key in obj) {
    if (obj[key] instanceof Object && !Object.isFrozen(obj[key])) {
      deepFreeze(obj[key]);
    }
  }

  return obj;
}

const obj = { a: 1, b: { c: 2 } };

deepFreeze(obj);

obj.b = 3; // Error: Cannot assign to read only property 'c'

console.log(obj);
