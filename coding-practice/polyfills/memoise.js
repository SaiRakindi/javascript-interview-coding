function myMemoize(func, context) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (!cache[key]) {
      cache[key] = func.call(context || this, ...args);
    }
    return cache[key];
  };
}

const addNumbers = (num1, num2) => {
  return num1 + num2;
};

const add = myMemoize(addNumbers);

console.time("First");
console.log(add(2, 3));
console.timeEnd("First");

console.time("Second");
console.log(add(2, 3));
console.timeEnd("Second");
