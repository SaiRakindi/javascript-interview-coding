// let resolveButton = document.getElementById("resolve");
// let rejectButton = document.getElementById("reject");

// const myPromise = new Promise((resolve, reject) => {
//   resolveButton.addEventListener("click", () => {
//     resolve("Promise resolved");
//   });

//   rejectButton.addEventListener("click", () => {
//     reject("Promise rejected");
//   });
// });

// // myPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// //resolve and reject a promise - functionality can be achieved using async

// async function myFunc() {
//   const res = await myPromise;

//   return "Sai";
//   //   return await myPromise; pending
//   //   throw new Error(); rejected
//   //   return "Resolved"; resolved
// }

// const res = myFunc();

// console.log(res);

function x() {
  var i = 1;

  setTimeout(function () {
    console.log(i);
    i++;
  }, i * 1000);

  console.log("Namaste JavaScript");
}

x();
