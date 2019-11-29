$(document).ready(function(){
    $('.slider-bem-vindo').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true
    });


    //Faz a splashscreen sumir
    setTimeout(() => {
        document.querySelector("#splashscreen").classList.add("splashscreen-out")
    }, 2500);

        document.querySelector("#loader").classList.add("loader-rotation")
});