firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = "home.html";
    } else {
        
    }
});

function fazerLogin() {

let email = $('#email-login').val();
let senha = $('#senha-login').val();

firebase.auth().signInWithEmailAndPassword(email, senha).catch(function() {
    alert(`Falha no login. Verifique as informações.`);
    });
}

function criarConta() {
    let email = $('#email-form').val();
    let senha = $('#senha-form').val();

    firebase.auth().createUserWithEmailAndPassword(email, senha).catch(function() {
        alert(`Falha ao criar a conta. Verifique as informações e tente novamente.`);
      });
}