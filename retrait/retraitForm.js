if (sessionStorage.getItem('balance') == null || sessionStorage.getItem('overdraft') == null) {

    location.href = '../travailSM/index.html';

}

let validate = document.getElementById('validate');
let overdraftInfo = sessionStorage.getItem("overdraft");
let balanceInfo = sessionStorage.getItem("balance");
let textBalance = document.getElementById('balance');
let textOverdraft = document.getElementById('overdraft');
textOverdraft.innerHTML = overdraftInfo;
textBalance.innerHTML = balanceInfo;

function overdraftCalculation(event) {
    event.preventDefault();
    let balance = parseInt(sessionStorage.getItem("balance"));
    let overdraft = parseInt(sessionStorage.getItem("overdraft"));
    let withdrawalText = document.getElementById('withdrawal').value;
    let withdrawal = parseInt(withdrawalText);

    if (isNaN(withdrawal) || withdrawal < 0) {
        popUpClassError();
        document.getElementById('popUp').innerHTML = "Veuillez rentrer un nombre positif";
    } else {

        let result = balance - withdrawal;
        if ((result < 0 && overdraft == 0) || (result < 0 && Math.abs(result) > overdraft)) {
            popUpClassError();
            document.getElementById('popUp').innerHTML = "Solde insuffisant <br/>" + 'Votre solde restant est de : ' + balance + "<br/> Votre découvert est de :" + overdraft + "<br/>";
        } else {
            popUpClassValidate();
            document.getElementById('popUp').innerHTML = "Opération réussie";
            balance = balance - withdrawal;
            sessionStorage.setItem("balance", balance);
            document.getElementById('balance').innerHTML = balance;
        }
    }
}
validate.addEventListener('click', overdraftCalculation);

function popUpClassError() {
    document.getElementById('divPopUp').classList.remove("popUpValidate");
    document.getElementById('divPopUp').classList.remove("popUpError");
    document.getElementById('divPopUp').classList.add("popUpError");
}

function popUpClassValidate() {
    document.getElementById('divPopUp').classList.remove("popUpValidate");
    document.getElementById('divPopUp').classList.remove("popUpError");
    document.getElementById('divPopUp').classList.add("popUpValidate");
}