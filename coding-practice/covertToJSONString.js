const a = { name: "Sai", age: "25" };

const JSONObj = JSON.stringify(a);

const parsedObj = JSON.parse(JSONObj);

console.log(a, JSONObj, parsedObj);
