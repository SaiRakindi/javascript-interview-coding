//Usual function
function square(num) {
  return num * num;
}

console.log(square(5));

//IIFE - Immediately Invoked Function Epxression
(function (num) {
  return (function (num1) {
    console.log(num);
  })(6);
})(5);
