firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = "home.html";
    } else {
        
    }
});