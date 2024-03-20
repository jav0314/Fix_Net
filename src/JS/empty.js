import { formIds } from "./const.js";

export default class EmptySubmit {
  static init() {
    const form = document.getElementById(formIds.form);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      if (
        formData.get(formIds.password).length == 0 ||
        formData.get(formIds.username).length == 0
      ) {
        alert("Campos vacios");
        return;
      }
    });
  }
}
