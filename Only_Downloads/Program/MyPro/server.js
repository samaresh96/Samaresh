const a = document.querySelector("#btn");

a.addEventListener("click", () => {
  document.body.style.backgroundColor ="black"
});
a.addEventListener("click", function() {
  this.style.boxShadow = "10px 10px 20px white"
});
