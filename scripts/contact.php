<?php
// Check for empty fields
if(empty($_POST['nom'])  		||
   empty($_POST['prenom']) 		||
   empty($_POST['societe']) 		||
   empty($_POST['telephone']) 		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	print_r("No arguments Provided! /////");
	return false;
   }
	
$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$societe = $_POST['societe'];
$telephone = $_POST['telephone'];
$email_address = $_POST['email'];
$message = $_POST['message'];
	
// CREATION DE L'email
$to = 'stagiaire@socafluid.fr'; // Add your email address in between the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Nouveau Message Site Groupe-socafluid.fr de la part de :  $noms";
$email_body = "Nouveau message de la part de : \n\n\nNom: $nom\n\nPrénom: $prenom\n\nSociété : $societe\n\nTéléphone : $telephone\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "MIME-Version: 1.0\r\n";
$headers.= "From: =?utf-8?b?".base64_encode($nom)."?= <".$email_address.">\r\n";
$headers.= "Content-Type: text/plain;charset=utf-8\r\n";
$headers.= "Reply-To: $email_address\r\n"; 
if (mail($to,$email_subject,$email_body,$headers) ) {
    return true;
} else { return false;
       }
?>
