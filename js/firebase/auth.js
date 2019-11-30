function fazerLogin() {

    let email = $('#email-login').val();
    let senha = $('#senha-login').val();

    firebase.auth().signInWithEmailAndPassword(email, senha).catch(function() {
        alert(`Falha no login. Verifique as informações.`);
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            if (user) {
                window.location.href = "home.html";
            } else {
                alert("Ocorreu um erro ao salvar suas informações. Verifique sua conexão e as informações fornecidas e tente novamente."); 
            }
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
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var db = firebase.firestore();
            db.collection("usuarios").doc(user.uid).set({
                id: user.uid,
                nome: nome,
                tel: tel
            }).then(function () {
                if (user) {
                    window.location.href = "home.html";
                } else {
                    alert("Ocorreu um erro ao salvar suas informações. Verifique sua conexão e as informações fornecidas e tente novamente."); 
                }
            });
        } else {
            
        }
    });
}