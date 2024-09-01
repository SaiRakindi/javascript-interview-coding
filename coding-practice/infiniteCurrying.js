function add(a) {
  return function (y) {
    if (y) return add(a + y);
    else return a;
  };
}

console.log(add(2)(3)(4)());
