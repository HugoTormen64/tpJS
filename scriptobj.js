const Ouverture_de_compte = {
    wantDeco: '',
    montantDeco: parseInt(0),
    montantInitial: parseInt(0),

    decouvert: function () {
        this.wantDeco = prompt('Voulez-vous un découvert?');
        if (this.wantDeco == 'oui') {
            do {
                this.montantDeco = prompt('Choissisez votre montant de découvert :');
                if (this.montantDeco < 100 || this.montantDeco > 2000) {
                    alert('Entrez un nouveau montant');
                }
            } while (this.montantDeco < 100 || this.montantDeco > 2000);
            alert('Votre demande a été prise en compte');
        }
        do {
            this.montantInitial = prompt("Entrez votre montant initial :");
            if (this.montantInitial < 500) {
                alert('Entrez un nouveau montant');
            }
        } while (this.montantInitial < 500);

        alert("Votre découvert est : " + this.montantDeco + " \n Votre montant initial est : " + this.montantInitial);
    }
    this.decouvert();
}


}