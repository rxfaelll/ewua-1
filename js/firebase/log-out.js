function desconectar() {
    firebase.auth().signOut().then(function() {
        window.location.href = "index-fake.html";
    }).catch(function(error) {
        alert('Erro ao desconectar. Verifique sua conexão e tente novamente.');
    });    
}
