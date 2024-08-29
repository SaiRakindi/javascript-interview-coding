var a = {};
var b = { key: "b" };
var c = { key: "c" };

// console.log(a);
// console.log(b);
// console.log(c);

a[b] = 600;
b[c] = 700;

// console.log(a);
// console.log(b);
// console.log(c);

console.log(a[c]);
console.log(a[b]);
console.log(b[b]);
console.log(b[c]);
