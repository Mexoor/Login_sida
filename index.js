
let logInForm = document.getElementById("loginForm");
let successMessage = document.getElementById("successLogIn");
const namn = "Bella";
const lösenord = "qwe123";

function logIn(){
    let username = logInForm.name.value;
    let userPassword = logInForm.password.value;

    if(username == namn && userPassword == lösenord){
        localStorage.setItem('username', logInForm.name.value);
        localStorage.setItem('password', logInForm.password.value);
        logInForm.style.visibility = 'hidden';
        successMessage.style.display = 'flex';
        
    }else{
        alert("Failure");
    }

}

function returnToLoginForm(){
    localStorage.clear();
    logInForm.style.visibility = 'visible';
    successMessage.style.display = 'none';
}

function checkLogin(){
    let username = localStorage.getItem('username');
    let password = localStorage.getItem('password');    

    if(username == namn && password == lösenord){
        logInForm.style.visibility = 'hidden';
        successMessage.style.display = 'flex';
    }
}

window.onload = checkLogin;
