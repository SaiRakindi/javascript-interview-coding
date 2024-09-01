let productsElement = document.getElementById("products");

productsElement.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    window.location.href += "#" + event.target.id;
  }
});
