<?php
if(isset($_POST['envoyer'])) {
	if(!empty($_POST['nom']) AND !empty($_POST['prenom']) AND !empty($_POST['societe']) AND !empty($_POST['telephone']) !empty($_POST['mail']) AND !empty($_POST['message'])) {
		$header="MIME-Version: 1.0\r\n";
		$header.='From:"Groupe-Socafluid.fr"<stagiaire@socafluid.fr>'."\n";
		$header.='Content-Type:text/html; charset="uft-8"'."\n";
		$header.='Content-Transfer-Encoding: 8bit';

		$message='
		<html>
			<body>
				<div align="center">
					<u>Nom de l\'expéditeur :</u>'.$_POST['nom'].'<br />
					<u>Prénom de l\'expéditeur :</u>'.$_POST['prenom'].'<br />
					<u>Société de l\'expéditeur :</u>'.$_POST['prenom'].'<br />
					<u>Numéro de téléphone de l\'expéditeur :</u>'.$_POST['prenom'].'<br />
					<u>Mail de l\'expéditeur :</u>'.$_POST['mail'].'<br />
					<u>
					<br />
					'.nl2br($_POST['message']).'
				</div>
			</body>
		</html>
		';

		mail("stagiaire@socafluid.fr", "CONTACT - Groupe-Socafluid.fr", $message, $header);
		$msg="Votre message a bien été envoyé !";
	} else {
		$msg="Tous les champs doivent être complétés !";
	}
}
?>