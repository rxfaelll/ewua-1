/* Uma caralhada de código só pra fazer as labels
ficarem em cima quando o input ta com texto */


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
let salvarForm = document.querySelector("#entrar-login");
salvarForm.addEventListener("click", event => {
    event.preventDefault();
})