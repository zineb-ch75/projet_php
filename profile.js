const boutonsModifier = document.querySelectorAll(".edit-btn");

boutonsModifier.forEach(function(button){

    button.addEventListener("click", function(){

        let info = button.parentElement;

        let paragraphe = info.querySelector("p");

        let ancienneValeur = paragraphe.textContent;

        let nouvelleValeur = prompt("Modifier la valeur :", ancienneValeur);

        if(nouvelleValeur !== null && nouvelleValeur !== ""){

            paragraphe.textContent = nouvelleValeur;

        }

    });

});


const boutonSauvegarder = document.querySelector(".btn-edit");

boutonSauvegarder.addEventListener("click", function(){

    alert("Profil sauvegardé avec succès !");

});


const boutonLogout = document.querySelector(".btn-logout");

boutonLogout.addEventListener("click", function(){

    let confirmation = confirm("Voulez-vous vraiment vous déconnecter ?");

    if(confirmation){

        window.location.href = "connexion.html";

    }

});