import { formIds } from "./const.js";
import FormSumbit from "./enter.js";

const handlePasswordVisibility = () => {
  const showPasswordCTA = document.getElementById(formIds.showPassword);
  const passwordCTA = document.getElementById(formIds.password);
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
  FormSumbit.init();
  handlePasswordVisibility();
});
