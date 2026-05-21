const search = document.getElementById("search");

search.addEventListener("keyup", function () {

    const valeur = search.value.toLowerCase();

    const boutiques = document.querySelectorAll(".boutique");

    boutiques.forEach((boutique) => {

        const nom = boutique.querySelector("h4")
        .innerText
        .toLowerCase();

        const ville = boutique.querySelector(".city")
        .innerText
        .toLowerCase();

        if(
            nom.includes(valeur) ||
            ville.includes(valeur)
        ){
            boutique.style.display = "block";
        }
        else{
            boutique.style.display = "none";
        }

    });

});