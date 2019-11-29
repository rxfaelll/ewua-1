//Abre/Fecha container de dúvida para virar parceiro
const containerParceria = document.querySelector(".container-parceria-help");
const closeBtn = document.querySelector("#closeBtn");
const blur = document.querySelector(".blur-parceria-help");
const headerHelpBtn = document.querySelector("#header-help-btn");

headerHelpBtn.addEventListener("click", openParceriaHelp);
blur.addEventListener("click", closeParceriaHelp);
closeBtn.addEventListener("click", closeParceriaHelp);

function openParceriaHelp(){
    containerParceria.classList.add("show-container");
    blur.classList.add("show-container");
}

function closeParceriaHelp(){
    containerParceria.classList.remove("show-container");
    blur.classList.remove("show-container");
}

//Abre/Fecha container dos restaurantes/parceiros

const btnParceiro0 = document.querySelector("#container-parceiro-0");
const btnParceiro1 = document.querySelector("#container-parceiro-1");
const btnParceiro2 = document.querySelector("#container-parceiro-2");
const btnParceiro3 = document.querySelector("#container-parceiro-3");

const closeBtnRestaurante = document.querySelectorAll(".close-parceiro-btn");
const blurCard = document.querySelector(".blur-card");
const cardParceiro = document.querySelectorAll("#card-parceiro-0, #card-parceiro-1, #card-parceiro-2, #card-parceiro-3");


btnParceiro0.addEventListener("click", () =>{
    openCard(0);
});

btnParceiro1.addEventListener("click", () =>{
    openCard(1);
});

btnParceiro2.addEventListener("click", () =>{
    openCard(2);
});

btnParceiro3.addEventListener("click", () =>{
    openCard(3);
});

blurCard.addEventListener("click", closeCard);

for (let i = 0; i < closeBtnRestaurante.length; i++) {   

    closeBtnRestaurante[i].addEventListener("click", closeCard);     
}

function openCard(btnClicked){
    

    document.querySelector(`#card-parceiro-${btnClicked}`).classList.add("show-container");
    blurCard.classList.add("show-container");
}

function closeCard(){
    for (let i = 0; i < cardParceiro.length; i++) {
        
    $(`#card-parceiro-${i}`).scrollTop(0);
    cardParceiro[i].classList.remove("show-container");
        
    }
    blurCard.classList.remove("show-container");

    $(".close-stick").removeClass("black-stick");
}






//Deixa o X de fechar cinza quando scrolla o card pra baixo
$("#card-parceiro-0").scroll(function() {
    var height = $("#card-parceiro-0").scrollTop();

    if (height > 128) {
        $(".close-stick").addClass("black-stick");
    }else{
        $(".close-stick").removeClass("black-stick");
    }    
});

$("#card-parceiro-1").scroll(function() {
    var height = $("#card-parceiro-1").scrollTop();

    if (height > 128) {
        $(".close-stick").addClass("black-stick");
    }else{
        $(".close-stick").removeClass("black-stick");
    }    
});

$("#card-parceiro-2").scroll(function() {
    var height = $("#card-parceiro-2").scrollTop();

    if (height > 128) {
        $(".close-stick").addClass("black-stick");
    }else{
        $(".close-stick").removeClass("black-stick");
    }    
});

$("#card-parceiro-3").scroll(function() {
    var height = $("#card-parceiro-3").scrollTop();

    if (height > 128) {
        $(".close-stick").addClass("black-stick");
    }else{
        $(".close-stick").removeClass("black-stick");
    }    
});