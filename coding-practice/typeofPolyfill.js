function typeOf(value) {
  if (!value) return "null";
  if (value === undefined) return "undefined";
  if (Array.isArray(value)) return "Array";
  if (value instanceof Date) return "Date";
  if (value instanceof RegExp) return "RegExp";

  return typeof value;
}

console.log(typeOf(null)); // Output: 'null'
console.log(typeOf()); // Output: 'null'
console.log(typeOf([])); // Output: 'array'
console.log(typeOf(/regex/)); // Output: 'regexp'
