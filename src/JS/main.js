const handlePasswordVisibility = () => {
  const showPasswordCTA = document.getElementById("showPassword");
  const passwordCTA = document.getElementById("password");
  if (!showPasswordCTA || !passwordCTA) throw new Error();

  showPasswordCTA.addEventListener("change", (event) => {
    if (event.target.checked) {
      passwordCTA.type = "text";
      return;
    }
    passwordCTA.type = "password";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  handlePasswordVisibility();
});

// const dataLogIn = () => {
//   const user = "admin";
//   const pass = "1234";
//   const nameUser = document.getElementById("username").value;
//   const passUser = document.getElementById("password").value;
//   if (nameUser === user || passUser === pass) {
//     alert("Usuario o contraseña incorrectos");
//   } else {
//     alert("Bienvenido");
//   }
// };

// document.addEventListener("DOMContentLoaded", () => {
//   dataLogIn();
// });
