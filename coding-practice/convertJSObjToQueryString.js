function toQueryString(obj) {
  //Type 1
  //   let queryString = "";
  //   for (const key in obj) {
  //     queryString += `${key}=${obj[key]}&`;
  //   }
  //   return queryString;

  //Type 2
  const convertedQueryValue = Object.keys(obj)
    .map((key) => key + "=" + obj[key])
    .join("&");

  return convertedQueryValue;
}

const obj = { name: "John", age: 30 };
const queryString = toQueryString(obj);
console.log(queryString); // Output: 'name=John&age=30'
