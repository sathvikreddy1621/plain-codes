/* ------------------- EMAIL LOGIN ------------------- */
function signupEmail() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then(() => alert("Account created! Please login."))
        .catch(e => alert(e.message));
}

function loginEmail() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(() => window.location.href = "dashboard.html")
        .catch(e => alert(e.message));
}

/* ------------------- GOOGLE LOGIN ------------------- */
function googleLogin() {
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(() => window.location.href = "dashboard.html")
        .catch(e => alert(e.message));
}

/* ------------------- PHONE LOGIN ------------------- */
let confirmationResult;

window.onload = function () {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        'recaptcha-container',
        { size: 'normal' }
    );
};

function sendOTP() {
    let phone = document.getElementById("phone").value;

    firebase.auth().signInWithPhoneNumber(phone, recaptchaVerifier)
        .then(res => {
            confirmationResult = res;
            alert("OTP Sent!");
        })
        .catch(e => alert(e.message));
}

function verifyOTP() {
    let otp = document.getElementById("otp").value;

    confirmationResult.confirm(otp)
        .then(() => window.location.href = "dashboard.html")
        .catch(e => alert(e.message));
}