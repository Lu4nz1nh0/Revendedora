// função de carrossel, com o swiper

document.addEventListener("DOMContentLoaded", () => {
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    const info1 = document.querySelector(".info1");
    const info2 = document.querySelector(".info2");
    const info1top = document.querySelector(".info1-top");
    const info2top = document.querySelector(".info2-top");
    const marca = document.querySelector(".marca-carro");
    const modelo = document.querySelector(".modelo-carro");
    const valor = document.querySelector(".valor");
    const titulos = Array.from(document.querySelectorAll(".titulo"));
    const corpos = Array.from(document.querySelectorAll(".corpo"));

    const slides = Array.from(document.querySelectorAll(".swiper-slide img"));

    if(sessionStorage.getItem("theme") === "dark"){
        info1.style.background = "#28292e";
        info1.style.boxShadow = "0 2px 4px white";
        info1.style.border = "1px solid white";
        info1top.style.borderBottom = "1px solid white";
        info2.style.boxShadow = "0 2px 4px #AB2020";
        info2.style.border = "1px solid white";
        info2top.style.borderBottom = "1px solid white";

        if(prev && next){
            prev.style.background = "linear-gradient(to left, transparent, #383941)";
            prev.style.color = "white";
    
            next.style.background = "linear-gradient(to right, transparent, #383941)";
            next.style.color = "white";
        }

        marca.style.color = "white";
        modelo.style.color = "red";
        valor.style.color = "red";

        titulos.forEach((titulo) => {
            titulo.style.color = "white";
        });

        corpos.forEach((corpo) => {
            corpo.style.color = "white";
        });
        
        slides.forEach((slide) => {
            slide.style.border = "1px solid white";
            slide.style.boxShadow = "0 2px 4px white";
        });
    }
});

var swiper = new Swiper(".swiper-container", {
    loop: true,
    pagination : {
        el: ".swiper-pagination",
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    slidesPerView: 3,
    spaceBetween: 5,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 5,
        }
    }
});