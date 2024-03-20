import { formIds } from "./const.js";

export default class FormSumbit {
  static init() {
    const form = document.getElementById(formIds.form);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      if (
        formData.get(formIds.password) !== "1234" ||
        formData.get(formIds.username) !== "admin"
      ) {
        alert("Usuario o Clave incorrecto");
        return;
      }
      window.location.href = "inicio.html";
      alert("Sesion iniciada");
    });
  }
}
