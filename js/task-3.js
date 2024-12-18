const nameInput = document.querySelector("#name-input");
const result = document.querySelector("#name-output");

nameInput.addEventListener("input", (e) => {
  if (e.target.value.trim() == "null" || e.target.value.trim() == "") {
    result.textContent = "Anonymous";
  } else {
    result.textContent = e.target.value.trim();
  }
});
