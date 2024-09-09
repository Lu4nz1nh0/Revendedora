// tela de login

document.addEventListener("DOMContentLoaded", () => {
    if(sessionStorage.getItem("loginDone") === "true"){
        document.getElementById("user").href = "#";

        userimg = document.getElementById("user-image");        
        userimg.src = "../img/user-image-login-done.png";
    }
});

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("keydown", function(event){
        if(event.key === "Enter" || event.key === "Tab"){
            event.preventDefault();

            let inputs = Array.from(document.querySelectorAll("input"));
            let currentIndex = inputs.indexOf(event.target);
            let nextIndex = currentIndex + 1;

            if(nextIndex < inputs.length){
                inputs[nextIndex].focus();
            } else{
                checkLogin(inputs[0].value, inputs[1].value);
            }
        }
    })
});

document.getElementById("login-card").addEventListener("submit", (event) => {
    event.preventDefault();

    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;

    checkLogin(user, pass);
});

function checkLogin(user, password){
    if(user === "admin@gmail.com" && password === "1234"){
        sessionStorage.setItem("loginDone", "true");

        window.location.href = "../index.html";
    } else{
        alert("Usuário ou senha incorretas!");

        document.getElementById("user").value = "";
        document.getElementById("pass").value = "";
    }
}

// document.getElementById("")