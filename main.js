document.addEventListener("DOMContentLoaded", function () {
  var passwordInput = document.querySelector(".password-input");
  var passwordToggle = document.querySelector(".password-toggle");

  passwordToggle.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
});
