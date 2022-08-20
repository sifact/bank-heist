// step-1: add click event handler with the submit button
// select items:
const submitBtn = document.getElementById("btn-submit");
const emailField = document.querySelector(".email");
const passwordField = document.querySelector(".password");
const alert = document.querySelector(".alert");
console.log(alert);

// event listeners
submitBtn.addEventListener("click", checkIdentity);

// function
function checkIdentity() {
    // step-2: get the email address inside the email address field
    const email = emailField.value;
    // step-3: get the password
    const password = passwordField.value;

    // DANGER: do not verify email address on the client side
    // check the password and mail:

    if (email === "sifat" && password === "srt") {
        displayAlert("Cracked successfully", "success");
        window.location.href = "bank.html";
    } else {
        displayAlert("Failed, try again", "danger");
    }
    emailField.value = "";

    passwordField.value = "";
}

function displayAlert(text, action) {
    alert.innerText = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(function () {
        alert.innerText = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}
