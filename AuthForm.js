export class AuthForm {
  constructor(form, email, password) {
    this.form = form;
    this.email = email;
    this.password = password;
  }

  validateEmail(email) {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    // email not pass test -> create span above input with error
    if (!regex.test(email)) {
      const spanEmailError = document.createElement("span");
      spanEmailError.innerText = "Invalid email address";
      spanEmailError.id = "email-error";
      spanEmailError.style.color = "red";
      !document.querySelector("#email-error") &&
        this.email.before(spanEmailError);
      return false;
    }
    return true;
  }
  // bad password -> span above input
  validatePassword(password) {
    if (password.length < 5) {
      const spanPasswordError = document.createElement("span");
      spanPasswordError.innerText = "Password should be more than 4 characters";
      spanPasswordError.id = "password-error";
      spanPasswordError.style.color = "red";
      !document.querySelector("#password-error") &&
        this.password.before(spanPasswordError);
      return false;
    }
    return true;
  }
}
