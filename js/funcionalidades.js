// tela de login

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const navbar = document.getElementById("nav");
    const footer = document.getElementById("foo");

    const automoveis = Array.from(document.querySelectorAll(".card-automovel"));
    const filtros = document.querySelector(".filtros");
    const cards = Array.from(document.querySelectorAll(".card"));
    const cards_contato = Array.from(document.querySelectorAll(".card-contato"));

    const tel = document.getElementById("tel");
    const zap = document.getElementById("zap");
    const inst = document.getElementById("inst");
    const gmail = document.getElementById("gmail");
    const face = document.getElementById("face");

    const userimg = document.getElementById("user-image");
    const settings = document.getElementById("engrenagem");

    if(sessionStorage.getItem("loginDone") === "true"){
        document.getElementById("user").href = "#";
        
        if(document.location.pathname.endsWith("revendedora_main/index.html")) userimg.src = "img/user-image-login-done.png";
        else userimg.src = "../img/user-image-login-done.png";
    }

    if(sessionStorage.getItem("theme") === "dark"){
        if(footer){
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
        }

        navbar.classList.add("light-theme");
        navbar.classList.remove("dark-theme");

        if(document.location.pathname.endsWith("revendedora_main/index.html")){
            if(sessionStorage.getItem("loginDone") === "true") userimg.src = "img/user-image-login-done-dark.png";
            else userimg.src = "img/user-image-dark.png";

            settings.src = "img/settings-dark.png";
        } else{
            if(sessionStorage.getItem("loginDone") === "true") userimg.src = "../img/user-image-login-done-dark.png";
            else userimg.src = "../img/user-image-dark.png";

            settings.src = "../img/settings-dark.png";
        }

        if(footer){
            footer.classList.add("light-theme");
            footer.classList.remove("dark-theme");
        }

        if(footer){
            if(document.location.pathname.endsWith("revendedora_main/index.html")){
                tel.src = "img/telefone-dark.png";
                zap.src = "img/zap-dark.png";
                inst.src = "img/inst-dark.png";
                gmail.src = "img/gmail-dark.png";
                face.src = "img/face-dark.png";
            } else{
                tel.src = "../img/telefone-dark.png";
                zap.src = "../img/zap-dark.png";
                inst.src = "../img/inst-dark.png";
                gmail.src = "../img/gmail-dark.png";
                face.src = "../img/face-dark.png";
            }
        }

        if(cards){
            cards.forEach((card) => {
                card.style.backgroundColor = "gray";
            });
        }

        if(cards_contato){
            cards_contato.forEach((card) => {
                card.style.border = "1px solid white";
                card.style.backgroundColor = "rgb(175, 175, 175)";
            });
        }

        if(automoveis){
            automoveis.forEach((card_automovel) => {
                card_automovel.style.backgroundColor = "#28292e";
                card_automovel.style.border = "1px solid white";
                card_automovel.style.boxShadow = "0 2px 4px white";

                card_automovel.querySelector(".nome-carro").style.color = "white";
                card_automovel.querySelector(".valor-carro").style.color = "red";
                card_automovel.querySelector(".corpo").style.color = "white";
            });

            if(filtros){
                filtros.style.backgroundColor = "#28292e";
                filtros.style.border = "1px solid white";
                filtros.style.boxShadow = "0 2px 4px white";
                filtros.querySelector(".filtro-titulo").style.color = "white";
    
                filtros.querySelectorAll("input").forEach((input) => {
                    input.style.border = "1px solid white";
                });
    
                filtros.querySelectorAll("label").forEach((label) => {
                    label.style.color = "white";
                });
    
                filtros.querySelectorAll(".titulo").forEach((titulo) => {
                    titulo.style.color = "white";
                });
            }

            const button_layout = document.querySelector(".button-layout");

            if(button_layout){
                button_layout.querySelectorAll("button").forEach((button) => {
                    button.style.backgroundColor = "#28292e";
                    button.style.color = "white";
                });
            }
        }
    } else{
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");

        navbar.classList.add("dark-theme");
        navbar.classList.remove("light-theme");

        if(footer){
            footer.classList.add("dark-theme");
            footer.classList.remove("light-theme");
        }
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

if(document.getElementById("login-card")){
    document.getElementById("login-card").addEventListener("submit", (event) => {
        event.preventDefault();
    
        user = document.getElementById("user").value;
        pass = document.getElementById("pass").value;
    
        checkLogin(user, pass);
    });
}

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

// tela de configurações

// variáveis

let imagem_eng = document.getElementById("engrenagem");

// funções

function rotateSettings(menu){
    if(menu.getAttribute("id") === "settings"){
        if(document.location.pathname.endsWith("revendedora_main/index.html")){
            if(sessionStorage.getItem("theme") === "dark") imagem_eng.src = "img/settings-dark.png";
            else imagem_eng.src = "img/settings.png";
        } else{
            if(sessionStorage.getItem("theme") === "dark") imagem_eng.src = "../img/settings-dark.png";
            else imagem_eng.src = "../img/settings.png";
        }

        imagem_eng.style.transform = "rotate(-45deg)";
        imagem_eng.style.scale = "1";
        
    } else{
        if(document.location.pathname.endsWith("revendedora_main/index.html")) imagem_eng.src = "img/settings-clicked.png";
        else imagem_eng.src = "../img/settings-clicked.png";

        imagem_eng.style.transform = "rotate(45deg)";
        imagem_eng.style.scale = "1.1";
    }
}

function clickedOff(event){
    if(event.target !== document.getElementById("settings")) document.getElementById("settings").setAttribute("id", "menu");
}

function showMenu(){
    const MENU = document.getElementById("menu") || document.getElementById("settings");

    rotateSettings(MENU);

    if(MENU.getAttribute("id") === "menu") MENU.setAttribute("id", "settings");
    else MENU.setAttribute("id", "menu");
}

function changeTheme(){
    if(sessionStorage.getItem("theme") === "light" || !sessionStorage.getItem("theme")) sessionStorage.setItem("theme", "dark");
    else sessionStorage.setItem("theme", "light");
    
    document.location.reload();
}

function logoff(){
    if(sessionStorage.getItem("loginDone") === "true"){
        sessionStorage.setItem("loginDone", "false");
        document.location.reload();
    }
}