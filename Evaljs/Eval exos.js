// Exercice evaluation 1

var bouton1= document.getElementById("Id_btn1");
bouton1.addEventListener("click",clickbtn1);

function clickbtn1() {

    jeune = 0
    nonjeune = 0
    middle = 0 
    agem20 = 0
    agep40 = 0
    agemiddle = 0
    
    do {

    n = 0
    age = Number(prompt("Saisissez un age de la personne n°" + (n+1)));
    n++;10

        if (age < 20) {
            jeune++;
            agem20=jeune;
        }

        else if ((age > 40)&&(age < 100)) {
            nonjeune++;
            agep40=nonjeune;
        }

        else if ((age >= 20)&&(age <= 40)) {
            middle++;
            agemiddle=middle;
        }

}

    while (age < 100)

    centenaire = 1

    alert ("Il y a "+agem20+" personnes qui ont moins de 20 ans\nIl y a "+agep40+" personnes qui ont plus de 40 ans\nIl y a "+agemiddle+" personnes qui ont entre 20 et 40 ans\nIl y a "+centenaire+" centenaire")



}

// Exercice evaluation 2

var bouton2= document.getElementById("Id_btn2");
bouton2.addEventListener("click",clickbtn2);

function clickbtn2() {

    nombre = window.prompt ("Entrez le numéro de la table:","Saisir un entier ici");

        var i;
        for (i = 1; i <= 10; i++) {
        document.write (nombre+" x "+i+"="+nombre*i+"<br>");
        }

        }
        
// Exercice evaluation 3

var bouton3= document.getElementById("Id_btn3");
bouton3.addEventListener("click",clickbtn3);

function clickbtn3() {

    const tab = ["Audrey","Aurelien", "Flavien", "Jeremy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stephane"];
    const saisie = window.prompt(`Veuillez choisir un prénom parmi ${[...tab]}.`)
    if(tab.includes(saisie)){
        tab.splice(tab.indexOf(saisie),1);
        tab.push(" ");
        console.log(tab)
    }
    else{alert("Erreur nom indisponible dans la liste.")}

}

// Exercice evaluation 4

var bouton4= document.getElementById("Id_btn4");
bouton4.addEventListener("click",clickbtn4);

function clickbtn4()
{
    
do 
{
    var PU=parseInt(prompt("Veuillez saisir le prix unitaire du produit à commander"));
    var QTECOM=parseInt(prompt("Veuillez saisir la quantité du produit à commander"));    
    var PORT=6
    var TOT=PU*QTECOM
    
    
        if((TOT>=100)&&(TOT<=200))
        {
            REM=(0.05)*TOT;
            PORT=(0.02)*(TOT-REM);
            
                if(PORT<6)
                {
                    PORT=6
                    PAP=(TOT-REM)+PORT;
                    alert("Cela vous coûtera "+PAP.toFixed(2)+"€, dont "+PORT.toFixed(2)+"€ de frais de port et "+REM.toFixed(2)+"€ de remise");
                }

                else
                {
                    PAP=(TOT-REM)+PORT;
                    alert("Cela vous coûtera "+PAP.toFixed(2)+"€, dont "+PORT.toFixed(2)+"€ de frais de port et "+REM.toFixed(2)+"€ de remise");
                }
        }

        else if((TOT>=201)&&(TOT<=500))
        {
            REM=(0.1)*TOT;
            PORT=(0.02)*(TOT-REM);
            PAP=(TOT-REM)+PORT;
            alert("Cela vous coûtera "+PAP.toFixed(2)+"€, dont "+PORT.toFixed(2)+"€ de frais de port et "+REM.toFixed(2)+"€ de remise");
        }

        else if(TOT>500)
        {
            REM=(0.1)*TOT;

                if(TOT-REM<500)
                {
                PORT=(0.02)*(TOT-REM);
                PAP=(TOT-REM)+PORT;
                alert("Cela vous coûtera "+PAP.toFixed(2)+"€, dont "+PORT.toFixed(2)+"€ de frais de port et "+REM.toFixed(2)+"€ de remise");
                }

                else
                {
                    PORT=0*(TOT-REM);
                    PAP=(TOT-REM);
                    alert("Cela vous coûtera "+PAP.toFixed(2)+"€, dont "+PORT.toFixed(2)+"€ de frais de port et "+REM.toFixed(2)+"€ de remise");
                }
        
        }

        else
        {

        REM=0*TOT
        PAP=(TOT-REM)+PORT;
                
        alert("Cela vous coûtera "+PAP.toFixed(2)+"€, dont "+PORT.toFixed(2)+"€ de frais de port et "+REM.toFixed(2)+"€ de remise");
        }
            
        
}

while((PU!=0,null)||(QTECOM!=0,null))
}

// Exercice evaluation 5

document.getElementById("contact").addEventListener("submit", function(e) {
    var erreur;
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var date = document.getElementById("date");
    var cp = document.getElementById("cp");
    var mail = document.getElementById("mail");
    var consent = document.getElementById("consent")

    if (!nom.value) {
        erreur = "Veuillez renseigner ce champ";
    }

    if (!prenom.value) {
        erreur = "Veuillez renseigner ce champ";
    }

    if (!date.value) {
        erreur = "Veuillez renseigner ce champ";
    }

    if (!cp.value) {
        erreur = "Veuillez renseigner ce champ";
    }

    if (!mail.value) {
        erreur = "Veuillez renseigner ce champ";
    }

    if (!consent.value) {
        erreur = "Veuillez renseigner ce champ";
    }

    if (erreur) {
        document.getElementById("erreurnom").innerHTML = erreur;
    }

    if (erreur) {
        document.getElementById("erreurcp").innerHTML = erreur;
    }

    if (erreur) {
        document.getElementById("erreurdate").innerHTML = erreur;
    }

    if (erreur) {
        document.getElementById("erreurmail").innerHTML = erreur;
    }

    if (erreur) {
        document.getElementById("erreurconsent").innerHTML = erreur;
    }

    if (erreur) {
        e.preventDefault();
        document.getElementById("erreurprenom").innerHTML = erreur;
        return false;
    }

    else {
        alert('Demande envoyée.');
    }
})