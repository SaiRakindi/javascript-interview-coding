let car = {
  name: "Ferrari",
  color: "Red",
};

function purchaseCar(currency, price) {
  console.log(`I bought ${this.color} - ${this.name} at ${currency}${price}`);
}

//bind method
const bindPurchase = purchaseCar.bind(car, "$", "1000000");
console.log(bindPurchase()); //we can pass args to bindPurchase here as well

//polyfill for bind
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }

  context.func = this;

  return function (...newArgs) {
    return context.func(...args, ...newArgs);
  };
};

const myBindPurchase = purchaseCar.myBind(car, "$", "60000");
console.log(myBindPurchase());

const myBindPurchaseArgsLater = purchaseCar.myBind(car);
console.log(myBindPurchase("$", "60000"));
