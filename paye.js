const paymentMethods = document.querySelectorAll(".payment-method");

paymentMethods.forEach((method)=>{

    method.addEventListener("click", ()=>{
        paymentMethods.forEach((m)=>{
            m.style.border = "2px solid #eee";
            m.style.background = "white";
        });
        method.style.border = "2px solid #8b5e3c";
        method.style.background = "#faf3ea";

    });

});
const payButton = document.querySelector(".btn-pay");

payButton.addEventListener("click", ()=>{
    const inputs = document.querySelectorAll(".form-control");

    let valid = true;

    inputs.forEach((input)=>{

        if(input.value.trim() === ""){

            input.style.border = "2px solid red";

            valid = false;

        }else{

            input.style.border = "1px solid #ddd";

        }

    });

    if(valid){

        alert("Paiement effectué avec succès !");

    }else{

        alert("Veuillez remplir tous les champs.");

    }

});
payButton.addEventListener("mouseenter", ()=>{

    payButton.style.transform = "scale(1.03)";

});

payButton.addEventListener("mouseleave", ()=>{

    payButton.style.transform = "scale(1)";

});