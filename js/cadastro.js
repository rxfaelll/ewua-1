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