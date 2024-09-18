function once(func, context) {
  let isFuncRan;

  return function () {
    if (func) {
      isFuncRan = func.apply(context || this, arguments);
      func = null;
    }

    return isFuncRan;
  };
}

const hello = once(() => console.log("hello"));

hello();

hello();
hello();
hello();
