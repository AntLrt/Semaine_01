var bouton1= document.getElementById("Id_btn1");
bouton1.addEventListener("click",clickbtn1);

function clickbtn1(){

    var prenom = prompt("Veuillez saisir votre prénom");
    if(prenom==null){
    alert("Vous avez cliqué sur Annuler");
    return;
    }

    var age= parseInt(prompt("Veuillez saisir votre age"));
    if(isNaN(age)){
    alert("Vous n'avez pas saisi un age correct !\nVeuillez recommencer.");
    return;
    }  

    alert("Voici ce que vous avez saisi :\n\nVotre prénom : "+prenom+"\nVotre age : " +age);
    }

