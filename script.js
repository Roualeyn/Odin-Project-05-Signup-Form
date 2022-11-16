const signupForm = document.getElementById("signup-form");
const passwordField = document.getElementById("password");
const passwordConfirmField = document.getElementById("confirm-password");
const passwordMessage = document.getElementById("password-asterisk");

function matchPasswords(pass) {
    if(passwordField.value != passwordConfirmField.value){
        passwordField.setCustomValidity('invalid');
        passwordConfirmField.setCustomValidity('invalid');
        passwordMessage.textContent = "* Passwords must match.";

    } else {
        passwordField.setCustomValidity('');
        passwordConfirmField.setCustomValidity('');
        passwordMessage.textContent = "";
    }
}

passwordField.addEventListener("input", matchPasswords);
passwordConfirmField.addEventListener("input", matchPasswords);

