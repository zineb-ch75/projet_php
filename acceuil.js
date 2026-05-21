let panier = JSON.parse(localStorage.getItem("panier")) || [];
const boutons = document.querySelectorAll(".btn-green");
boutons.forEach((btn) => {
    btn.addEventListener("click", function () {
        const card = this.closest(".card");
        const nom = card.querySelector(".card-title").innerText;
        const prix = card.querySelector(".text-success").innerText.replace(" DH","");
        const image = card.querySelector("img").src;
        const produit = {
            nom: nom,
            prix: prix,
            image: image
        };
        panier.push(produit);
        localStorage.setItem("panier", JSON.stringify(panier));
        alert(nom + " ajouté au panier !");
    });

});
const liens = document.querySelectorAll('a[href^="#"]');

liens.forEach((lien) => {

    lien.addEventListener("click", function (e) {

        e.preventDefault();

        const cible = document.querySelector(this.getAttribute("href"));

        cible.scrollIntoView({
            behavior: "smooth"
        });

    });

});

