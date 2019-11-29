/* Uma caralhada de código só pra fazer as labels
ficarem em cima quando o input ta com texto */

// input Nome
let inputNome = document.querySelector(".input-nome");
let phNome = document.querySelector(".ph-nome");

inputNome.addEventListener("input", () => {
        if(inputNome.value.length > 0){
            phNome.classList.add("up-placeholder");
        }else{
            phNome.classList.remove("up-placeholder");
        }
})

// input Email
let inputEmail = document.querySelector(".input-email");
let phEmail = document.querySelector(".ph-email");

inputEmail.addEventListener("input", () => {
        if(inputEmail.value.length > 0){
            phEmail.classList.add("up-placeholder");
        }else{
            phEmail.classList.remove("up-placeholder");
        }
})

// input Tel
let inputTel = document.querySelector(".input-tel");
let phTel = document.querySelector(".ph-tel");

inputTel.addEventListener("input", () => {
        if(inputTel.value.length > 0){
            phTel.classList.add("up-placeholder-tel");
        }else{
            phTel.classList.remove("up-placeholder-tel");
        }
})

// input Senha
let inputSenha = document.querySelector(".input-senha");
let phSenha = document.querySelector(".ph-senha");

inputSenha.addEventListener("input", () => {
        if(inputSenha.value.length > 0){
            phSenha.classList.add("up-placeholder-senha");
        }else{
            phSenha.classList.remove("up-placeholder-senha");
        }
})






/* BOTÕES DO FORM */

// Botão de salvar
let salvarForm = document.querySelector("#salvar-form");
salvarForm.addEventListener("click", event => {
    event.preventDefault();
})

// Botão de cancelar
let cancelarForm = document.querySelector("#cancelar-form");
cancelarForm.addEventListener("click", event => {
    event.preventDefault();

    apagaCampos();
})

function apagaCampos() {
    let formInput = document.querySelectorAll("#js-form div input");
    let formPlaceholder = document.querySelectorAll("#js-form div div");

    for (let i = 0; i < formInput.length; i++) {
        formInput[i].value = "";
        formPlaceholder[i].classList.remove("up-placeholder");
        formPlaceholder[i].classList.remove("up-placeholder-tel");
        formPlaceholder[i].classList.remove("up-placeholder-senha");
    }
}









//Abre/Fecha container dos termos

const btnTermos = document.querySelector(".container-termos > button");
const closeBtnTermos = document.querySelector("#close-termos");
const blurTermos = document.querySelector(".blur-termos");
const termosAberto = document.querySelector(".container-termos-aberto")

btnTermos.addEventListener("click", openTermos);
blurTermos.addEventListener("click", closeTermos);
closeBtnTermos.addEventListener("click", closeTermos);

function openTermos(){
    termosAberto.classList.add("show-container");
    blurTermos.classList.add("show-container");
}

function closeTermos(){
    termosAberto.classList.remove("show-container");
    blurTermos.classList.remove("show-container");
}









//Pega o arquivo de imagem e mostra pro usuário na bolita
function loadFile(event) {
    var output = document.getElementById('image');
    output.src = URL.createObjectURL(event.target.files[0]);
  };