const logInForm = document.getElementById("loginForm");
const successMessage = document.getElementById("successLogIn");

function logIn(){
    const namn = "Bella";
    const lösenord = "qwe123";

    const username = logInForm.name.value;
    const userPassword = logInForm.password.value;
    
    if(username === namn && (userPassword === lösenord)){
        
        logInForm.style.visibility = "hidden";
        successMessage.style.display = "flex";
    }
}

function returnToLoginForm(){
    logInForm.style.visibility = "visible";
    successMessage.style.visibility = "none";
}
