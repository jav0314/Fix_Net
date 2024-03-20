import { formIds } from "./const.js";

export default class FormSumbit {
  static init() {
    const form = document.getElementById(formIds.form);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      if (
        formData.get(formIds.password) !== "03032024" ||
        formData.get(formIds.username) !== "tuyyo"
      ) {
        alert("Usuario o Clave incorrecto");
        return;
      }
      if (
        formData.get(formIds.password).length == "0" ||
        formData.get(formIds.username).length == "0"
      ) {
        alert("Rellenar usuario y clave");
        return;
      }
      alert("Sesion iniciada");
    });
  }
}
