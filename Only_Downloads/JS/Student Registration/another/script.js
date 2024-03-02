const nameInput = document.querySelector("#name");

nameInput.addEventListener("input", (event) => {
  if (event.target.value !== "") {
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
    });
  }
});
