function elements() {
    const formEl = document.querySelector("form");
    const nameEl = document.querySelector("#name");
    const cardNumEl = document.querySelector("#card-number");
    const expDateMonthEl = document.querySelector("#exp-date-mm");
    const expDateYearEl = document.querySelector("#exp-date-yy");
    const cvcEl = document.querySelector("#cvc");
    const continueBtn = document.querySelector("#continue-btn");
    const cardFrontNameEl = document.querySelector("#card-front-name");
    const cardFrontNumEl = document.querySelector("#card-front-number");
    const cardFrontExpiryMMEl = document.querySelector("#card-front-exp-mm-date");
    const cardFrontExpiryYYEl = document.querySelector("#card-front-exp-yy-date");
    const cardBackCvvEl = document.querySelector("#card-back-cvv");
    // Error Elements
    const nameErrorEl = document.querySelector("#name-error");
    const cardNumErrorEl = document.querySelector("#number-error");
    const expDateErrorEl = document.querySelector("#exp-date-error");
    const cvcErrorEl = document.querySelector("#cvc-error");
    const confirmationScreen = document.querySelector("#confirmation-screen");
    return {
        formEl,
        nameEl,
        cardNumEl,
        expDateMonthEl,
        expDateYearEl,
        cvcEl,
        continueBtn,
        cardFrontNameEl,
        cardFrontNumEl,
        cardFrontExpiryMMEl,
        cardFrontExpiryYYEl,
        cardBackCvvEl,
        nameErrorEl,
        cardNumErrorEl,
        expDateErrorEl,
        cvcErrorEl,
        confirmationScreen,
    };
}
const EL = elements();
export default EL;
