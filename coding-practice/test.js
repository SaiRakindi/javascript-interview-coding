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

// const userDetails = { name: "Sai", age: "23" };
// const myLocalStorage = () => {
//   const localTimeout = setTimeout(() => {
//     localStorage.setItem("myStorage", JSON.stringify(userDetails));
//   }, 1000);

//   setTimeout(() => {
//     console.log("getItem", JSON.parse(localStorage.getItem("myStorage")));
//     clearTimeout(localTimeout);
//     localStorage.removeItem("myStorage");
//     console.log("getItem", JSON.parse(localStorage.getItem("myStorage")));
//   }, 2000);
// };

const myLocalStorage = {
  setItem: function (key, value, expiryTime) {
    const item = {
      value: value,
      expiry: new Date().getTime() + expiryTime,
    };

    localStorage.setItem(key, JSON.stringify(item));
  },

  getItem: function (key) {
    const fetchItem = localStorage.getItem(key);

    if (!fetchItem) {
      return null;
    }

    const parsedItem = JSON.parse(fetchItem);

    const currentTime = new Date().getTime();

    if (currentTime > item.parsedItem) {
      localStorage.removeItem(key);
      return null;
    }

    return parsedItem.value;
  },
};

myLocalStorage.setItem("foo", "bar", 1000); // Set 'foo' with 'bar' that expires in 1000 milliseconds
