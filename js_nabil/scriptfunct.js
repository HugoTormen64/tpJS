/* Calcul des agios
Agios = (montant utilisé du découvert * nombre de jour d'utilisation * taux de la banque) / 365
Le taux de banque = 10 / 100 = 0.1
*/
function CalculBkFees() {
    
const bankRate = 10/100;
let ovdft =0, ovdftTme = 0;

// Faire entrer le montant du découvert et Arrondir à 2 chiffres

ovdft = parseFloat(prompt("saisissez le montant du découvert autorisé utilisé"));
let ovdftAm = ovdft.toFixed(2);
console.log ("montant du découvert : "+ovdftAm);


// Si montant = 0 : Affiche "Découvert non autorisé => pas d'agios" puis "Ciao".
if (ovdftAm == 0) {
    alert("Découvert non autorisé => pas d'agios");
}
else{
// Sinon forcer à entrer un montant commpris entre 100€ et 2000€
while (ovdftAm < 100 || ovdftAm >= 2000){
    ovdftAm = prompt("Saisissez un montant compris entre 100 et 2000");
}
// Entrer la durée d'utilisation du découvert en jours
do {
        ovdftTme = parseInt(prompt("Saisissez la durée du découvert autorisé utilisé"));
} while (ovdftTme < 1 || ovdftTme > 366);

// Calcul des agios arrondi à 2 décimales
let agios = (ovdftTme * ovdftTme * bankRate) / 365;
agios = agios.toFixed(2);

alert("Le montant des agios est : "+ agios+" €");
}
return agios;
}
CalculBkFees();