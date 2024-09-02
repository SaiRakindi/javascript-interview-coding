function showText(text, timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, timer);
  });
}

function myPromiseAll(promises) {
  let promiseResult = [];

  return new Promise((resolve, reject) => {
    promises
      .forEach((promiseItem, index) => {
        promiseItem.then((res) => {
          promiseResult.push(res);
        });

        if (index === promises.length - 1) {
          resolve(promiseResult);
        }
      })
      .catch((error) => reject(error));
  });
}

// Promise.all([
//   showText("Hello", 1000),
//   Promise.resolve("P resolved"),
//   Promise.resolve("Again resolved"),
//   Promise.reject("New reject"),
// ]).then((res) => console.log(res));

myPromiseAll([
  showText("Hello", 1000),
  Promise.resolve("P resolved"),
  Promise.resolve("Again resolved"),
  Promise.reject("New reject"),
]).then((res) => console.log(res));
