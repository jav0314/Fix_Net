const handlePasswordVisibility = () => {
  const showPasswordCTA = document.getElementById("showPassword")
  const passwordCTA = document.getElementById("password")
  /**
   * Add a message to the error if you want
   */
  if (!showPasswordCTA || !passwordCTA) throw new Error()

  showPasswordCTA.addEventListener("change", (event) => {
    if (event.target.checked) {
      passwordCTA.type = "text"
      return
    }
    passwordCTA.type = "password"
  })
}

document.addEventListener("DOMContentLoaded", () => {
  handlePasswordVisibility()
})