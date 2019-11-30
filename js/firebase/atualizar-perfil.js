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
        alert('Erro ao buscar informações do usuário. Verifique sua conexão.'); 
    }
});

const atualizarBanco = () => {

}

function enviarFoto() {
    // Create a root reference
    var storageRef = firebase.storage().ref('/profile/');

    // Create a reference to 'mountains.jpg'
    var mountainsRef = storageRef.child('mountains.jpg');

    // Create a reference to 'images/mountains.jpg'
    var mountainImagesRef = storageRef.child('images/mountains.jpg');

    // While the file names are the same, the references point to different files
    mountainsRef.name === mountainImagesRef.name            // true
    mountainsRef.fullPath === mountainImagesRef.fullPath    // false
}