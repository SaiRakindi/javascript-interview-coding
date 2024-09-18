const myThrottle = (callbackFn, delay) => {
  let last = 0;

  return (...args) => {
    let now = new Date().getTime();

    if (now - last < delay) return;

    if (now - last > delay) {
      last = now;

      return callbackFn(...args);
    }
  };
};

let triggerCount = 0;
const throttled = myThrottle(() => {
  triggerCount++;
  console.log(triggerCount);
}, 1000);
