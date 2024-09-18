let car = {
  color: "Red",
  company: "Toyota",
};

function purchaseCar(price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${price}`
  );
}

//call usage
purchaseCar.call(car, "500000");

//polyfill
Function.prototype.myCall = function (context = {}, ...rest) {
  if (typeof this !== "function") {
    throw new Error(this + ", is not callable");
  }

  context.func = this;
  context.func(...rest);
};

purchaseCar.myCall(car, "5000");
