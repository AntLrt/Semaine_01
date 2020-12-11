<!DOCTYPE html>
<html>
<head>
<?php 

// INSERT INTO `inscription` (`inscr_num`, `inscr_civilite`, `inscr_nom`, `inscr_prenom`, `inscr_date`, `inscr_mail`, `inscr_mp`) 

// VALUES (NULL, 'Monsieur', 'Loriot', 'Antoine', '15/07/96', 'loriot.antoine.pro@gmail.com', '15ju!llet');

include("wazheader.php");
include("connexion.php");

?>

<script language='javascript' type='text/javascript'>

var b_civilite=false; var b_nom=false; var b_prenom=false; var b_date=false; var b_mail=false; var b_mp=false;

function envoyer()
{
if(b_civilite==true && b_nom==true && b_prenom ==true && b_date ==true && b_mail ==true && b_mp==true)
{
document.getElementById('message').innerText = 'Envoi serveur';
//document.getElementById('inscription').submit();
}
else
{
document.getElementById('message').innerText = "Le formulaire n'est pas complet";
}
}

</script>
<script language='javascript' src='js/v_inscr.js'></script>

</head>

<div class="container">

<body>
<br>
<H1>Inscription</H1>

<form action="http://bienvu.net/script.php" method="GET">

    <div class="form-group">
        <label for="inputsexe">Civilité</label>
            <select class="form-control" id="inputsexe">
                <option>Madame</option>
                <option>Monsieur</option>
            </select>
    </div>

<div class="row">
    <div class="form-group col-6">
        <label for="inputnom">Nom</label>
            <input type="text" class="form-control" id="inputnom" placeholder="Votre nom">
    </div>

    <div class="form-group col-6">
        <label for="inputprenom">Prénom</label>
            <input type="text" class="form-control" id="inputprenom" placeholder="Votre prénom">
    </div>
</div>

<div class="form-group">
    <label for="example-date-input">Date de naissance</label>
        <input class="form-control" type="date" value="2011-08-19" id="example-date-input">
</div>

<div class="row">
    <div class="form-group col-6">
        <label for="inputmail">Adresse email</label>
        <input type="email" class="form-control" id="inputmail" placeholder="name@example.com">
    </div>

    <div class="form-group col-6">
        <label for="inputmail">Confirmer l'adresse email</label>
        <input type="email" class="form-control" id="inputmail" placeholder="name@example.com">
    </div>
</div>

<div class="row">
    <div class="form-group col-6">
        <label for="inputmp">Mot de passe</label>
            <input type="password" id="inputmp" class="form-control" aria-describedby="passwordHelpBlock">
        <small id="passwordHelpBlock" class="form-text text-muted">
            Votre mot de passe doit contenir au moins 5 caractéres, dont au moins 1 chiffre.
        </small>
    </div>

    <div class="form-group col-6">
        <label for="inputprenom">Confirmer le mot de passe</label>
            <input type="text" class="form-control" id="inputprenom">
    </div>
</div>

<button type="button" class="btn btn-dark border-danger" for="forminput" type="submit" value="Envoyer">Valider</button>

</form>
<br>
</div>

</body>

<?php

include("wazfooter.php");

?>

</html>