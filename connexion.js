function togglePassword(){
    const password = document.getElementById("password");

    if(password.type === "password"){

        password.type = "text";

    }else{

        password.type = "password";

    }

}
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    const password = document.getElementById("password").value;

    // vérifier champs vides
    if(email === "" || password === ""){
        alert("Veuillez remplir tous les champs");
    }else{
        alert("Connexion réussie");
        window.location.href = "acceuil.html";
    }

});

