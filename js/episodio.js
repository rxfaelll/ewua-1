$(document).ready(function () {
    $("#slider-eps").slick({
        autoplay: false,
        arrows: true,
        dots: true
    });

    document.querySelector(".slick-next").innerHTML = "Próximo Episódio <img src='icons/seta.svg' alt=''>";
});

// var primeiroEp = document.querySelector("#slick-slide-control00");
// var segundoEp = document.querySelector("#slick-slide-control01");
// var terceiroEp = document.querySelector("#slick-slide-control02");
// var quartoEp = document.querySelector("#slick-slide-control03");
// var quintoEp = document.querySelector("#slick-slide-control04");

// let epShow = $(".ep-show");
// setInterval(() => {
//     if ($(primeiroEp).hasClass("slick-active")) {
//         $(epShow).text("1º Episódio");

//     } else if ($(segundoEp).hasClass("slick-active")) {
//         $(epShow).text("2º Episódio");

//     } else if ($(terceiroEp).hasClass("slick-active")) {
//         $(epShow).text("3º Episódio");

//     } else if ($(quartoEp).hasClass("slick-active")) {
//         $(epShow).text("4º Episódio");

//     } else if ($(quintoEp).hasClass("slick-active")) {
//         $(epShow).text("5º Episódio");

//     }
// }, 100);