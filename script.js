/* Calcul des agios
Agios = (montant utilisé du découvert * nombre de jour d'utilisation * taux de la banque) / 365
Le taux de banque = 10 / 100 = 0.1
*/

const bankRate = 10/100;

// Faire entrer le montant du découvert et Arrondir à 2 chiffres
let ovdft = prompt("saisissez le montant du découvert autorisé utilisé");
ovdft = parseFloat(ovdft);
ovdftAm = ovdft.tofixed(2);

// Si montant = 0 : Affiche "Découvert non autorisé => pas d'agios"
if (ovdftAm === 0) {
    prompt("Découvert non autorisé => pas d'agios");
}
// Sinon Vérifier que le montant entré est commpris entre 100€ et 2000€
do {
    ovdft = prompt("saisissez le montant du découvert autorisé utilisé");
} while (!(ovdftAm >= 100 && <= 2000));

// Faire entrer la durée d'utilisation du découvert en jours 
do {
    ovdftTme = prompt("saisissez le montant du découvert autorisé utilisé");
} while (ovdftTme > 1 && < 366);

let agios = ovdftTme * ovdftTme * bankRate / 365;

prompt ("Le montant des agios est : ", agios);