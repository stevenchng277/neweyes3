
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    /*const username = loginForm.username.value;*/
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    
    
    if (password === "Dell2713") {
        window.location = 'admin.html'; 
    }
        
    else {
        alert('Wrong Password')
        /*loginErrorMsg.style.opacity = 1;*/
        window.location = "adminLogin2.html";
    }
})

