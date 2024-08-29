function curryingExplanation(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

console.log(curryingExplanation(2)(5)(6));
