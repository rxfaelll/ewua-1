function atualizarValores(user) {
    $('input#email-form').val(user.email);
    let db = firebase.firestore();
    $('.ph-email').toggleClass("up-placeholder");
    let usuarios = db.collection('usuarios');
    let usuarioAtual = usuarios.doc(user.uid);
    usuarioAtual.get().then(function(doc) {
        if (doc.exists) {
            let data = doc.data();
            let nomeAtual = data.nome;
            let telAtual = data.tel;

            $('input#nome-form').val(nomeAtual);
            $('input#tel-form').val(telAtual);

            $('.ph-nome').toggleClass("up-placeholder");
            $('.ph-tel').toggleClass("up-placeholder");
            $('.ph-tel').toggleClass("up-placeholder-tel");
        } else {
            console.log('doc não existe?');
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
};

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        atualizarValores(user);
    } else {
         
    }
});

function atualizarBanco() {
    let user = firebase.auth().currentUser;

    let avisado = 0;

    let emailVal = $('#email-form').val();
    let senhaVal = $('#senha-form').val();
    let nomeVal = $('#nome-form').val();
    let telVal = $('#tel-form').val();

    console.log(user.uid);

    user.updateEmail(emailVal).then(function() {
        
    }).catch(function(error) {
        alert('Houve um erro ao atualizar o endereço de email.');
    });

    // if (senhaVal != null && senhaVal != "") {
    //     user.updatePassword(senhaVal).then(function() {
    //         alert('Senha e outras informações foram atualizadas com sucesso! ✅');
    //         avisado = 1;
    //       }).catch(function(error) {
    //         alert('Ocorreu um erro ao atualizar sua senha. :('+error);
    //       });
    // }

    let db = firebase.firestore();
    let usuarios = db.collection('usuarios');
    let usuarioAtual = usuarios.doc(user.uid);
    usuarioAtual.set({
        id: user.uid,
        nome: nomeVal,
        tel: telVal
    }).then(function () {
        if (avisado == 0) {
            alert('Informações de perfil atualizadas com sucesso! ✅');
        }
    });
}

function enviarFoto() {
    // não conseguimos arrumar essa funcionalidade a tempo para a apresentação do projeto
}