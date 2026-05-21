const panier = JSON.parse(localStorage.getItem("panier")) || [];

const container = document.createElement("div");
document.body.appendChild(container);

let total = 0;

panier.forEach((produit) => {

    total += produit.prix;

    const div = document.createElement("div");

    div.className = "cart-card d-flex align-items-center justify-content-between";

    div.innerHTML = `
        <div class="d-flex align-items-center">
            <img src="${produit.image}" class="product-img me-4">
            <div>
                <h5>${produit.nom}</h5>
                <p class="mb-0">Produit GreenMarket</p>
            </div>
        </div>

        <div class="price">
            ${produit.prix} DH
        </div>
    `;

    container.appendChild(div);
});

document.querySelector(".text-success").innerText = total + " DH";
