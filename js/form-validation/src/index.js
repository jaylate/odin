import "./style.css";

function validate() {
  const form = document.querySelector("form");
  const email = document.querySelector("#email");
  const emailError = document.querySelector(".email-error");
  const country = document.querySelector("#country");
  const countryError = document.querySelector(".country-error");
  const zip = document.querySelector("#zip");
  const zipError = document.querySelector(".zip-error");
  const password = document.querySelector("#password");
  const passwordError = document.querySelector(".password-error");
  const passwordConfirm = document.querySelector("#password-confirmation");
  const passwordConfirmError = document.querySelector(
    ".password-confirmation-error",
  );

  email.addEventListener("input", () => {
    if (email.validity.typeMismatch) {
      email.setCustomValidity(
        "Invalid email address. Please input in format foo@bar.email",
      );
      emailError.textContent =
        "Invalid email address. Please input in format foo@bar.email";
    } else if (email.validity.valueMissing) {
      emailError.textContent = "Enter email address";
    } else {
      email.setCustomValidity("");
      emailError.textContent = "";
    }
  });

  zip.addEventListener("input", () => {
    if (zip.value.length !== 5 || isNaN(zip.value)) {
      zip.setCustomValidity("Invalid zip code. Please input in format 22000");
      zipError.textContent = "Invalid zip code. Please input in format 22000";
    } else {
      zip.setCustomValidity("");
      zipError.textContent = "";
    }
  });

  password.addEventListener("input", () => {
    if (password.value.length < 8) {
      password.setCustomValidity("Password is too short");
      passwordError.textContent = "Password is too short";
    } else {
      password.setCustomValidity("");
      passwordError.textContent = "";
    }
  });

  passwordConfirm.addEventListener("input", () => {
    if (password.value != passwordConfirm.value) {
      passwordConfirm.setCustomValidity("Passwords do not match");
      passwordConfirmError.textContent = "Passwords do not match";
    } else {
      passwordConfirm.setCustomValidity("");
      passwordConfirmError.textContent = "";
    }
  });
}

validate();
