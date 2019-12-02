function fazerLogin() {

    let email = $('#email-login').val();
    let senha = $('#senha-login').val();

    firebase.auth().signInWithEmailAndPassword(email, senha).catch(function() {
        alert(`Falha no login. Verifique as informações.`);
    }).then(function(user) {
        if (user) {
            window.location.href = "home.html";
        } else {
            
        }
    });
}

function criarConta() {
    let nome = $('#nome-form').val();
    let tel = $('#tel-form').val();
    let email = $('#email-form').val();
    let senha = $('#senha-form').val();

    firebase.auth().createUserWithEmailAndPassword(email, senha).catch(function() {
        alert(`Falha ao criar a conta. Verifique as informações e tente novamente.`);
    }).then(function () {
        let user = firebase.auth().currentUser;

        if (user) {
            var db = firebase.firestore();
            db.collection("usuarios").doc(user.uid).set({
                id: user.uid,
                nome: nome,
                tel: tel
            }).then(function() {
                window.location.href = "home.html";
            });
        } else {

        }
    });

}