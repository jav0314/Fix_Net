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
export default handlePasswordVisibility;
document.addEventListener("DOMContentLoaded", () => {
  handlePasswordVisibility();
});
