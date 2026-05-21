const form = document.querySelector("form");

const nom = document.querySelectorAll(".form-control")[0];
const prenom = document.querySelectorAll(".form-control")[1];
const email = document.querySelectorAll(".form-control")[2];
const password = document.querySelectorAll(".form-control")[3];
const confirmPassword = document.querySelectorAll(".form-control")[4];

const bouton = document.querySelector(".btn-green");

bouton.addEventListener("click", function(event){

    event.preventDefault();

    if(
        nom.value === "" ||
        prenom.value === "" ||
        email.value === "" ||
        password.value === "" ||
        confirmPassword.value === ""
    ){
        alert("Veuillez remplir tous les champs !");
        return;
    }

    if(password.value.length < 6){

        alert("Le mot de passe doit contenir au moins 6 caractères !");
        return;

    }

    if(password.value !== confirmPassword.value){

        alert("Les mots de passe ne correspondent pas !");
        return;

    }

    alert("Inscription réussie !");

    window.location.href = "acceuil.html";

});