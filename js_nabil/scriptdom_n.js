/* Calcul des agios
Agios = (montant utilisé du découvert * nombre de jour d'utilisation * taux de la banque) / 365
Le taux de banque = 10 / 100 = 0.1;
*/

let ovdAm=sessionStorage.getItem("overdraft");
console.log(ovdAm);
document.getElementById("overdraftAmount").value=ovdAm;

function CalculBkFees() {


    const bankRate = 10 / 100;
    let ovdftTme = 0,
        errorAmount = document.getElementById("errorAm");


    // Faire entrer le montant du découvert et Arrondir à 2 chiffres
    console.log(ovdAm);

    const validBtn = document.querySelector("button") // récupère l'état du bouton
    validBtn.addEventListener("click", function (e) { //écoute le bouton au clic
        e.preventDefault(); //permet de ne pas recharger la page au clic du bouton
        console.log("test bouton");
        ovdAm = parseFloat(ovdAm);
        console.log("montant de l'input overdraf Amount " + ovdAm);
        console.log(typeof ovdAm);
        ovdftTme = document.getElementById("overdraftTime").value;
        console.log("durée du découvert " + ovdftTme);
        // Si montant = 0 : Affiche "Découvert non autorisé => pas d'agios".


        if (ovdAm == 0) {
            console.log(errorAmount);
            errorAmount.innerHTML = "Découvert non autorisé => pas d'agios";
        } else if (ovdAm < 0) {
            console.log(errorAmount);
            errorAmount.innerHTML = "Le montant doit être compris entre 100€ et 2000€";
        } else if (isNaN(ovdAm)) {
            console.log(errorAmount);
            errorAmount.innerHTML = "Le montant doit être compris entre 100€ et 2000€";
        } else if (ovdAm < 100 || ovdAm > 2000) {
            console.log(ovdftTme)
            errorAmount.innerHTML = "Le montant doit être compris entre 100€ et 2000€";
        } else if (ovdftTme < 1 || ovdftTme > 366) {
            console.log(ovdftTme)
            errorAmount.innerHTML = "La durée doit être comprise entre 1 et 365 jours";
        } else {
            let bnkFees = (ovdAm * ovdftTme * bankRate) / 365;
            bnkFees = bnkFees.toFixed(2);
            document.getElementById("dispBnkFeesAm").innerHTML = "Le montant des agios est : " + bnkFees;
        }
    })
};

CalculBkFees();