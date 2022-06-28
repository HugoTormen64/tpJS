let msg = document.getElementById("alert-text");
let radioOui = document.getElementById("oui");
let radioNon = document.getElementById("non");
// radioNon.addEventListener('click',function(){msg.style.visibility='hidden'})
radioOui.addEventListener('click', function () {
    document.getElementById("deco").style.visibility = 'visible';
})
radioNon.addEventListener('click', function () {
    document.getElementById("deco").style.visibility = 'hidden';
})
let decoInput = document.getElementById("montant-deco");
let initInput = document.getElementById("montant-init");
 decoInput.addEventListener('blur',  function(event){
let valeur= event.target.value
 if (valeur <100  || valeur >2000) {
    decoInput.value="";
const textAlert = document.getElementById("alert-text")
      textAlert.innerHTML="Veuillez rentrer de nouveau un montant de découvert"
}})
initInput.addEventListener('blur',  function(event){
    let valeur= event.target.value
     if (valeur <500) {
        initInput.value="";
    const textAlert = document.getElementById("alert-text")
          textAlert.innerHTML="Entrez un nouveau montant"
        }})

let valide=document.getElementById("valider")
valide.addEventListener('click', function(event){
    event.preventDefault();
    const textAlert = document.getElementById("alert-text")
    textAlert.innerHTML="Votre compte a été bien crée"
sessionStorage.setItem("overdraft",decoInput.value);
sessionStorage.setItem("balance", initInput.value);
})