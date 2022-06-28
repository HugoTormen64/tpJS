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
console.log(typeof valeur);
valeur = parseInt(valeur);
console.log(typeof valeur);
 if (valeur <100  || valeur >2000 || typeof valeur !== "number") {
    decoInput.value="";
const textAlert = document.getElementById("alert-text")
      textAlert.innerHTML="Veuillez rentrer de nouveau un montant de découvert"
}})
initInput.addEventListener('blur',  function(event){
    let valeur= event.target.value
    console.log(typeof valeur);
    valeur = parseInt(valeur);
    console.log(typeof valeur);
     if (valeur <500 || typeof valeur !== "number") {
        initInput.value="";
    const textAlert = document.getElementById("alert-text")
          textAlert.innerHTML="Entrez un nouveau montant"
          console.log('erreur : ' + valeur);
        }})

let valide=document.getElementById("valider")
valide.addEventListener('click', function(event){
    let valeur = document.getElementById('montant-deco').value;
    valeur = parseInt(valeur);
    console.log(valeur);
    console.log(typeof valeur);
    if(typeof valeur !== "number" || typeof valeur == "undefined" || isNaN(valeur)){
        console.log(typeof valeur );
        event.preventDefault();
        const textAlert = document.getElementById("alert-text")
    textAlert.innerHTML="Impossible de créer le compte";
    }else{
    event.preventDefault();
    const textAlert = document.getElementById("alert-text")
    textAlert.innerHTML="Votre compte a bien été créé";
sessionStorage.setItem("overdraft",decoInput.value);
sessionStorage.setItem("balance", initInput.value);
setTimeout (function(){
    location.href="../retrait/index.html"},3000)
}});
