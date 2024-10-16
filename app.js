import EL from "./elements.js";

document.addEventListener("DOMContentLoaded", () => {
  ResetCardImage();
});
// Show card details on the image
EL.nameEl.addEventListener("input", () => {
  EL.cardFrontNameEl.textContent = EL.nameEl.value.toUpperCase();
});
EL.cvcEl.addEventListener("input", () => {
  EL.cardBackCvvEl.textContent = EL.cvcEl.value;
});
EL.expDateMonthEl.addEventListener("input", () => {
  EL.cardFrontExpiryMMEl.textContent = EL.expDateMonthEl.value + " /";
});
EL.expDateYearEl.addEventListener("input", () => {
  EL.cardFrontExpiryYYEl.textContent = EL.expDateYearEl.value;
});
// Format card number as being typed
EL.cardNumEl.addEventListener("input", (e) => {
  const inputElement = e.target;
  // Validate
  let validatedNumber = inputElement.value.replace(
    /[a-z!@#$%^&*()\-_=+\\|[\]{};:/?.,~'`">]/gi,
    "",
  );
  // Remove spaces
  validatedNumber = validatedNumber.replace(/(\d{4})(?=\d)/g, "$1 ");
  // Update value
  EL.cardNumEl.value = validatedNumber;
  // Display card name on the image
  EL.cardFrontNumEl.textContent = validatedNumber;
});
// Handle form submission
EL.formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let errors = validateForm();
  // Error Elements
  const nameErrorEl = document.querySelector("#name-error");
  const cardNumErrorEl = document.querySelector("#number-error");
  const expDateErrorEl = document.querySelector("#exp-date-error");
  const cvcErrorEl = document.querySelector("#cvc-error");
  displayError(errors.name, nameErrorEl, EL.nameEl);
  displayError(errors.number, cardNumErrorEl, EL.cardNumEl);
  displayError(errors.expDate, expDateErrorEl, EL.expDateMonthEl);
  displayError(errors.expDate, expDateErrorEl, EL.expDateYearEl);
  displayError(errors.cvc, cvcErrorEl, EL.cvcEl);
  // If form is valid, submit it
  if (Object.keys(errors).length === 0) {
    EL.confirmationScreen.classList.remove("hidden");
    EL.formEl.classList.add("hidden");
    EL.formEl.reset();
    ResetCardImage();
  }
});
// Reset cardimage
function ResetCardImage() {
  EL.cardFrontNameEl.textContent = "Jane Appleseed".toUpperCase();
  EL.cardBackCvvEl.textContent = "000";
  EL.cardFrontExpiryMMEl.textContent = "00" + " /";
  EL.cardFrontExpiryYYEl.textContent = "00";
  EL.cardFrontNumEl.textContent = "0000 0000 0000 0000";
}
// Handle continue button
EL.continueBtn.addEventListener("click", () => {
  const confirmationScreen = document.querySelector("#confirmation-screen");
  confirmationScreen.classList.add("hidden");
  EL.formEl.classList.remove("hidden");
});
// Validate form and return error object
function validateForm() {
  let errors = {};
  if (!EL.nameEl.value || EL.nameEl.value.length < 3) {
    errors.name = "Enter a valid name";
  }
  if (!EL.cardNumEl.value || EL.cardNumEl.value.length < 17) {
    errors.number = "Enter a valid card number";
  }
  if (
    !EL.expDateMonthEl.value ||
    !(Number(EL.expDateMonthEl.value) <= 12) ||
    !(Number(EL.expDateMonthEl.value) > 0) ||
    !EL.expDateYearEl.value ||
    !(
      Number(EL.expDateYearEl.value) <=
      (new Date().getFullYear() % 2000) + 5
    ) ||
    !(Number(EL.expDateYearEl.value) >= new Date().getFullYear() % 2000)
  ) {
    errors.expDate = "Enter a valid Exp Date";
  }
  if (
    !EL.cvcEl.value ||
    Number(EL.cvcEl.value) < 0 ||
    Number(EL.cvcEl.value) > 9999
  ) {
    errors.cvc = "Enter a valid CVC";
  }
  return errors;
}
function displayError(errorText, errorEl, inputEl) {
  if (errorText) {
    // Show error element
    errorEl.textContent = errorText;
    errorEl.classList.remove("hidden");
    // Change border color
    inputEl.classList.remove("border-[#DEDDDF]");
    inputEl.classList.add("border-red-500");
  } else {
    errorEl.classList.add("hidden");
    inputEl.classList.add("border-[#DEDDDF]");
    inputEl.classList.remove("border-red-500");
  }
}
