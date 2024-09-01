const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1 Resolved");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise2 Resolved");
  }, 5000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise3 Rejected");
  }, 3000);
});

Promise.all([p1, p2, p3])
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

Promise.allSettled([p1, p2, p3])
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

Promise.race([p1, p2, p3])
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

Promise.any([p1, p2, p3])
  .then((response) => console.log(response))
  .catch((error) => {
    console.error(error);
    console.error(error.errors); //Array of aggregate errors
  });
