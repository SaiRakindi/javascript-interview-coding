function myPromise(executor) {
  let onResolve,
    onReject,
    isFulfilled = false,
    isCalled = false,
    value,
    isRejected = false;

  function resolve(val) {
    isFulfilled = true;
    value = val;

    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;

    if (typeof onReject === "function") {
      onReject(val);
      called = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;

    if (isFulfilled && !isCalled) {
      called = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;

    if (isRejected && !isCalled) {
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const promiseResult = new myPromise((resolve, reject) => {
  setTimeout(() => reject("Promise resolved"), 1000);
  //   resolve("Promise resolved");
});

promiseResult
  .then((res) => console.log(res))
  .catch((error) => console.error(error));
