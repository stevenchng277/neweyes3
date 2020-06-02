
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    /*const username = loginForm.username.value;*/
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    
    if (username === "valli" && password === "Dell2713") {
        window.location = 'dashboardManager.html'; 
        
    } else if (password === "Dell2713") {
        window.location = 'dashboardUser.html'; 
    }
        
    else {
        alert('Wrong Password')
        /*loginErrorMsg.style.opacity = 1;*/
        window.location = "dashboardLogin.html";
    }
})

