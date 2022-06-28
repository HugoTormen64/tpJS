function retrait(){

    let decouvert = prompt('Montant de votre découvert 0 si aucun découvert autorisé ');
    while(isNaN(decouvert) == true || decouvert < 0 || decouvert == undefined || decouvert == "" ){
        decouvert = prompt('Decouvert non autorisé mettre les valeurs demandées');
    }

    let solde = prompt('Votre solde disponible');
    while(isNaN(solde) == true || solde < 0 || solde == undefined || solde == ""){
        solde = prompt('Solde non autorisé mettre les valeurs demandées');
    }
    
    solde = parseInt(solde);
    decouvert = parseInt(decouvert);
    
    let retrait = prompt('Saisir montant du retrait 0 pour arrêté');
    
    while(parseInt(retrait) !== 0){

        while ( isNaN(retrait) == true || retrait < 0){
            retrait = prompt('Montant invalide veillez changer');
        }

        let resultat =   parseInt(solde) - parseInt(retrait);
        if((resultat < 0 && decouvert == 0) || (resultat < 0 && Math.abs(resultat) > decouvert)){
            alert('Solde insuffisant');
            break;
        }
        solde = solde - retrait;
        alert('Votre solde restant est de : ' + solde);
        alert('Votre découvert est de : ' + decouvert);
        retrait = prompt('Saisir montant du retrait 0 pour arrêter');

    }

    alert('Votre solde restant est de : ' + solde);
    alert('Votre découvert est de : ' + decouvert);
}
// retrait();