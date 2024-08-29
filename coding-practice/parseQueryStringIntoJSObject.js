function parseQueryString(queryString) {
  const parsedObj = queryString.split("&");

  let obj = {};

  for (const item of parsedObj) {
    let [key, value] = item.split("=");
    obj[key] = value;
  }

  return obj;
}

const queryString = "name=John&age=30";
const obj = parseQueryString(queryString);
console.log(obj); // Output: { name: 'John', age: '30' }
