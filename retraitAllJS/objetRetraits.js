let retrait = {
    decouvert : prompt('Montant de votre découvert 0 si aucun découvert autorisé '),
    solde : prompt('Votre solde disponible'),
    verif : function(element){

        while(isNaN(element) == true || element < 0 || element == undefined || element == ""){
            element = prompt('Non autorisé mettre les valeurs demandées');
        }
    },  
    calculRetrait: function(){
        let calculRetrait = (prompt('Saisir un retrait à faire 0 pour annulé'));
        while(parseInt(calculRetrait) !== 0){

            while ( isNaN(calculRetrait) == true || calculRetrait < 0){
                calculRetrait = prompt('Montant invalide veillez changer');
            }
    
            let resultat =   parseInt(solde) - parseInt(calculRetrait);
            if((resultat < 0 && decouvert == 0) || (resultat < 0 && Math.abs(resultat) > decouvert)){
                alert('Solde insuffisant');
                break;
            }
            this.solde = this.solde - calculRetrait;
            alert('Votre solde restant est de : ' + this.solde);
            alert('Votre découvert est de : ' + this.decouvert);
            calculRetrait = prompt('Saisir montant du retrait 0 pour arrêter');
        }
    }
}
