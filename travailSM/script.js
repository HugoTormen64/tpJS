let wantDeco = '';
let montantDeco = 0;
let montantInitial = 0;
montantDeco = parseInt(montantDeco);
montantInitial = parseInt(montantInitial);

function decouvert() {
    wantDeco = prompt('Voulez-vous un découvert?');
    if (wantDeco == 'oui') {
        do {
            montantDeco = prompt('Choissisez votre montant de découvert :');
            if (montantDeco < 100 || montantDeco > 2000) {
                alert('Entrez un nouveau montant');
            }
        } while (montantDeco < 100 || montantDeco > 2000);
        alert('Votre demande a été prise en compte');
    }
    do {
        montantInitial = prompt("Entrez votre montant initial :");
        if (montantInitial < 500) {
            alert('Entrez un nouveau montant');
        }
    } while (montantInitial < 500);

    alert("Votre découvert est : " + montantDeco + " \n Votre montant initial est : " + montantInitial);
}
decouvert();
