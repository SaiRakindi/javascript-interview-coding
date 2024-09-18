let car = {
  color: "Blue",
  company: "Benz",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} for ${currency}${price}`
  );
}

//apply method
purchaseCar.apply(car, ["$", "5000"]);

//polyfill for apply
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(", is not a function");
  }

  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }

  context.func = this;
  context.func(...args);
};

purchaseCar.myApply(car, ["$", "50000"]);
