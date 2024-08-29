function deepMerge(obj1, obj2) {
  const result = { ...obj1 };

  for (const key in obj2) {
    if (key in obj1) {
      result[key] = deepMerge(obj1[key], obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }

  return result;
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3, f: 5 }, e: 4 };
const merged = deepMerge(obj1, obj2);
console.log(merged);
