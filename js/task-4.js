const form = document.querySelector(".login-form");
const mail = document.querySelector("input[name=email]");
const pass = document.querySelector("input[name=password]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userData = {
    email: mail.value.trim(),
    password: pass.value.trim(),
  };

  if (userData.email == "") {
    alert("All form fields must be filled in");
    return
  }
  if (userData.password == "") {
    alert("All form fields must be filled in");
    return
  }
  console.log(userData);
  form.reset()
});
